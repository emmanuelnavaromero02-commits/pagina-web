#!/usr/bin/env node

import {
  existsSync,
  lstatSync,
  readFileSync,
  readdirSync,
} from "node:fs";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "out");
const ORIGIN = "https://www.7businesssolutions.com";

const ROUTES = [
  "/",
  "/services",
  "/services/software-factory",
  "/services/sap-integrations",
  "/services/cloud-data",
  "/services/enterprise-ai",
  "/copilot",
  "/copilot/impact",
  "/copilot/how-it-works",
  "/copilot/demo",
  "/copilot/use-cases",
  "/copilot/security",
  "/copilot/pilot",
  "/industries",
  "/experience",
  "/about",
  "/contact",
  "/privacy",
  "/legal",
  "/cookies",
  "/services/software-factory/custom-development",
  "/services/software-factory/enterprise-portals",
  "/services/software-factory/internal-apps",
  "/services/software-factory/apis-microservices",
  "/services/software-factory/evolutionary-support",
  "/services/sap-integrations/on-premise",
  "/services/sap-integrations/sap-cloud",
  "/services/sap-integrations/sap-btp",
  "/services/sap-integrations/abap-rfc-idocs",
  "/services/sap-integrations/middleware",
  "/services/sap-integrations/third-party",
  "/services/sap-integrations/successfactors",
  "/services/sap-integrations/sap-hcm",
  "/services/cloud-data/aws",
  "/services/cloud-data/azure",
  "/services/cloud-data/gcp",
  "/services/cloud-data/databases",
  "/services/cloud-data/data-pipelines",
  "/services/cloud-data/reporting",
  "/services/enterprise-ai/generative-ai",
  "/services/enterprise-ai/machine-learning",
  "/services/enterprise-ai/intelligent-automation",
  "/services/enterprise-ai/internal-assistants",
  "/services/enterprise-ai/operational-copilots",
  "/industries/finance",
  "/industries/operations",
  "/industries/hr-payroll",
  "/industries/executive-reporting",
  "/industries/sap-integrations",
  "/industries/process-automation",
  "/industries/internal-support",
  "/industries/data-governance",
];

const LOCALES = ["es", "en"];
const REQUIRED_SCHEMA_TYPES = ["Organization", "WebSite", "Service", "Person"];
const failures = [];
let checks = 0;

function fail(scope, message) {
  failures.push(`${scope}: ${message}`);
}

function check(condition, scope, message) {
  checks += 1;
  if (!condition) fail(scope, message);
}

function decodeEntities(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replace(/&#(\d+);/g, (_, number) => String.fromCodePoint(Number(number)))
    .replace(/&#x([\da-f]+);/gi, (_, number) =>
      String.fromCodePoint(Number.parseInt(number, 16)),
    );
}

function xmlDecode(value) {
  return decodeEntities(value.trim());
}

function attributes(tag) {
  const result = {};
  const body = tag.replace(/^<\/?[\w:-]+\s*/i, "").replace(/\/?\s*>$/, "");
  const expression = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  for (const match of body.matchAll(expression)) {
    const name = match[1].toLowerCase();
    result[name] = decodeEntities(match[2] ?? match[3] ?? match[4] ?? "");
  }
  return result;
}

function tags(html, name) {
  const expression = new RegExp(`<${name}\\b[^>]*>`, "gi");
  return [...html.matchAll(expression)].map((match) => attributes(match[0]));
}

function localizedPath(locale, route) {
  if (locale === "es") return route;
  return route === "/" ? "/en/" : `/en${route}`;
}

function canonicalUrl(locale, route) {
  return new URL(localizedPath(locale, route), ORIGIN).toString();
}

function normalizedUrl(value) {
  try {
    const url = new URL(value);
    const pathname = url.pathname === "/" ? "/" : url.pathname.replace(/\/+$/, "");
    return `${url.origin}${pathname}${url.search}`;
  } catch {
    return value;
  }
}

function routeFile(locale, route) {
  const prefix = locale === "en" ? ["en"] : [];
  const segments = route === "/" ? [] : route.slice(1).split("/");
  return path.join(OUT, ...prefix, ...segments, "index.html");
}

function expectedLocalizedRoutes() {
  return LOCALES.flatMap((locale) =>
    ROUTES.map((route) => {
      const localized = localizedPath(locale, route);
      return localized === "/" ? "/" : localized.replace(/\/+$/, "");
    }),
  );
}

function walk(directory) {
  if (!existsSync(directory)) return [];
  const files = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walk(target));
    else if (entry.isFile()) files.push(target);
  }
  return files;
}

function exportedIndexRoutes() {
  return walk(OUT)
    .filter((file) => path.basename(file) === "index.html")
    .map((file) => path.relative(OUT, path.dirname(file)).split(path.sep).join("/"))
    .filter((directory) =>
      directory !== "404" &&
      directory !== "en/404" &&
      !directory.split("/").includes("_next"),
    )
    .map((directory) => (directory === "" ? "/" : `/${directory}`))
    .sort();
}

function schemaTypesAndForbiddenKeys(value, state = { types: new Set(), forbidden: [] }) {
  if (Array.isArray(value)) {
    for (const item of value) schemaTypesAndForbiddenKeys(item, state);
    return state;
  }
  if (!value || typeof value !== "object") return state;

  for (const [key, item] of Object.entries(value)) {
    if (key === "@type") {
      for (const type of Array.isArray(item) ? item : [item]) {
        if (typeof type === "string") state.types.add(type);
      }
    }
    if (key.toLowerCase() === "address") state.forbidden.push("address");
    schemaTypesAndForbiddenKeys(item, state);
  }
  return state;
}

function validateJsonLd(html, scope) {
  const scripts = [
    ...html.matchAll(
      /<script\b[^>]*type=(?:"application\/ld\+json"|'application\/ld\+json')[^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ];
  check(scripts.length > 0, scope, "falta JSON-LD");
  if (scripts.length === 0) return;

  const aggregate = { types: new Set(), forbidden: [] };
  for (const [index, match] of scripts.entries()) {
    try {
      const parsed = JSON.parse(decodeEntities(match[1].trim()));
      const state = schemaTypesAndForbiddenKeys(parsed);
      for (const type of state.types) aggregate.types.add(type);
      aggregate.forbidden.push(...state.forbidden);
    } catch (error) {
      fail(scope, `JSON-LD ${index + 1} inválido: ${error.message}`);
    }
  }

  for (const type of REQUIRED_SCHEMA_TYPES) {
    check(aggregate.types.has(type), scope, `JSON-LD sin @type ${type}`);
  }
  check(!aggregate.types.has("LocalBusiness"), scope, "JSON-LD contiene LocalBusiness");
  check(!aggregate.types.has("PostalAddress"), scope, "JSON-LD contiene PostalAddress");
  check(aggregate.forbidden.length === 0, scope, "JSON-LD publica address");
}

function outputTargetExists(pathname) {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return false;
  }
  const normalized = decoded === "/" ? "/" : decoded.replace(/\/+$/, "");
  const routes = new Set(expectedLocalizedRoutes().map((route) =>
    route === "/" ? "/" : route.replace(/\/+$/, ""),
  ));
  if (routes.has(normalized) || normalized === "/404" || normalized === "/en/404") {
    return true;
  }

  const relative = decoded.replace(/^\/+/, "");
  const target = path.resolve(OUT, relative);
  if (target !== OUT && !target.startsWith(`${OUT}${path.sep}`)) return false;
  if (existsSync(target) && lstatSync(target).isFile()) return true;
  return existsSync(path.join(target, "index.html"));
}

function referencedUrls(html, pageUrl) {
  const references = [];
  for (const tagName of ["a", "link", "script", "img", "source"]) {
    for (const attrs of tags(html, tagName)) {
      for (const attribute of ["href", "src"]) {
        if (attrs[attribute]) references.push(attrs[attribute]);
      }
      for (const attribute of ["srcset", "imagesrcset"]) {
        if (!attrs[attribute]) continue;
        for (const candidate of attrs[attribute].split(",")) {
          const url = candidate.trim().split(/\s+/)[0];
          if (url) references.push(url);
        }
      }
    }
  }

  return references.flatMap((reference) => {
    if (/^(?:mailto:|tel:|data:|blob:|javascript:|#)/i.test(reference)) return [];
    try {
      const url = new URL(reference, pageUrl);
      if (url.origin !== ORIGIN) return [];
      return [{ raw: reference, pathname: url.pathname }];
    } catch {
      return [{ raw: reference, pathname: "" }];
    }
  });
}

function validatePage(locale, route) {
  const file = routeFile(locale, route);
  const localizedRoute = localizedPath(locale, route);
  const scope = localizedRoute;
  check(existsSync(file), scope, `no existe ${path.relative(ROOT, file)}`);
  if (!existsSync(file)) return;

  const html = readFileSync(file, "utf8");
  check(
    new RegExp(`<html\\b[^>]*\\blang=["']${locale}["']`, "i").test(html),
    scope,
    `el documento no declara lang=\"${locale}\"`,
  );

  const linkTags = tags(html, "link");
  const canonical = linkTags.find((attrs) =>
    (attrs.rel ?? "").toLowerCase().split(/\s+/).includes("canonical"),
  );
  const expectedCanonical = canonicalUrl(locale, route);
  check(Boolean(canonical?.href), scope, "falta canonical");
  if (canonical?.href) {
    check(
      normalizedUrl(canonical.href) === normalizedUrl(expectedCanonical),
      scope,
      `canonical incorrecto: ${canonical.href} (esperado ${expectedCanonical})`,
    );
  }

  const alternates = new Map();
  for (const attrs of linkTags) {
    const rels = (attrs.rel ?? "").toLowerCase().split(/\s+/);
    if (rels.includes("alternate") && attrs.hreflang && attrs.href) {
      alternates.set(attrs.hreflang.toLowerCase(), attrs.href);
    }
  }
  const expectedAlternates = {
    es: canonicalUrl("es", route),
    en: canonicalUrl("en", route),
    "x-default": canonicalUrl("es", route),
  };
  for (const [language, expected] of Object.entries(expectedAlternates)) {
    check(alternates.has(language), scope, `falta hreflang ${language}`);
    if (alternates.has(language)) {
      check(
        normalizedUrl(alternates.get(language)) === normalizedUrl(expected),
        scope,
        `hreflang ${language} incorrecto: ${alternates.get(language)}`,
      );
    }
  }

  const ogImage = tags(html, "meta").find(
    (attrs) => (attrs.property ?? "").toLowerCase() === "og:image",
  )?.content;
  const expectedOg = `${ORIGIN}/og-${locale}.png`;
  check(Boolean(ogImage), scope, "falta og:image");
  if (ogImage) {
    check(
      normalizedUrl(ogImage) === normalizedUrl(expectedOg),
      scope,
      `OG no localizado: ${ogImage} (esperado ${expectedOg})`,
    );
  }

  validateJsonLd(html, scope);

  const pageUrl = canonicalUrl(locale, route);
  const broken = new Set();
  for (const reference of referencedUrls(html, pageUrl)) {
    if (!reference.pathname || !outputTargetExists(reference.pathname)) {
      broken.add(reference.raw);
    }
  }
  for (const reference of broken) fail(scope, `referencia interna rota: ${reference}`);

  check(!/TODO_CLIENTE/i.test(html), scope, "contiene TODO_CLIENTE");
  check(!/example\.com/i.test(html), scope, "contiene example.com");
  const visibleText = decodeEntities(
    html
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  );
  check(!/\bplaceholder\b/i.test(visibleText), scope, "contiene placeholder visible");
}

function validateRouteInventory() {
  check(ROUTES.length === 52, "rutas", `lista base con ${ROUTES.length}; se esperaban 52`);
  check(new Set(ROUTES).size === 52, "rutas", "la lista base contiene duplicados");

  const expected = new Set(expectedLocalizedRoutes());
  const actualRoutes = exportedIndexRoutes();
  const actual = new Set(actualRoutes);
  check(actualRoutes.length === 104, "rutas", `hay ${actualRoutes.length} index.html canónicos; se esperaban 104`);
  check(actual.size === actualRoutes.length, "rutas", "hay rutas exportadas duplicadas");
  for (const route of expected) check(actual.has(route), "rutas", `falta ${route}`);
  for (const route of actual) check(expected.has(route), "rutas", `ruta inesperada ${route}`);
}

function validateOgAssets() {
  for (const locale of LOCALES) {
    const file = path.join(OUT, `og-${locale}.png`);
    check(existsSync(file), "OG", `falta out/og-${locale}.png`);
    if (existsSync(file)) {
      check(lstatSync(file).size > 0, "OG", `out/og-${locale}.png está vacío`);
    }
  }
}

function validateSitemap() {
  const file = path.join(OUT, "sitemap.xml");
  check(existsSync(file), "sitemap", "falta out/sitemap.xml");
  if (!existsSync(file)) return;
  const xml = readFileSync(file, "utf8");
  const locations = [...xml.matchAll(/<loc>([\s\S]*?)<\/loc>/gi)].map((match) =>
    xmlDecode(match[1]),
  );
  check(locations.length === 104, "sitemap", `contiene ${locations.length} <loc>; se esperaban 104`);
  check(new Set(locations).size === 104, "sitemap", "contiene URL duplicadas");

  const expected = new Set(
    LOCALES.flatMap((locale) => ROUTES.map((route) => normalizedUrl(canonicalUrl(locale, route)))),
  );
  const actual = new Set(locations.map(normalizedUrl));
  for (const url of expected) check(actual.has(url), "sitemap", `falta ${url}`);
  for (const url of actual) check(expected.has(url), "sitemap", `URL inesperada ${url}`);
}

function validate404() {
  const file = path.join(OUT, "404.html");
  check(existsSync(file), "404", "falta out/404.html");
  if (!existsSync(file)) return;
  const html = readFileSync(file, "utf8");
  check(/<!doctype html>/i.test(html), "404", "out/404.html no es un documento HTML");
  check(/<html\b[^>]*\blang=["']es["']/i.test(html), "404", "out/404.html no declara lang=\"es\"");
  check(html.trim().length > 500, "404", "out/404.html parece vacío o incompleto");

  const englishFile = path.join(OUT, "en", "404.html");
  if (existsSync(englishFile)) {
    const englishHtml = readFileSync(englishFile, "utf8");
    check(
      /<html\b[^>]*\blang=["']en["']/i.test(englishHtml),
      "404",
      "out/en/404.html no declara lang=\"en\"",
    );
  }
}

function validateForbiddenExportText() {
  const files = walk(OUT).filter((file) => /\.(?:html?|js|json|xml|txt)$/i.test(file));
  const patterns = [
    ["TODO_CLIENTE", /TODO_CLIENTE/i],
    ["example.com", /example\.com/i],
    ["estado de éxito simulado", /(?:fake|simulated)\s+(?:form\s+)?success|falso\s+éxito/i],
    ["formulario simulado", /simulated\s+(?:form\s+)?submission|envío\s+simulado/i],
    ["mensaje heredado sin endpoint", /Message ready to send\.\s*Set NEXT_PUBLIC_CONTACT_ENDPOINT/i],
  ];
  for (const file of files) {
    const content = readFileSync(file, "utf8");
    for (const [label, pattern] of patterns) {
      if (pattern.test(content)) fail(path.relative(ROOT, file), `contiene ${label}`);
    }
  }
}

function main() {
  if (!existsSync(OUT)) {
    console.error("✗ No existe out/. Ejecuta primero el build localizado.");
    process.exitCode = 1;
    return;
  }

  validateRouteInventory();
  validateOgAssets();
  for (const locale of LOCALES) {
    for (const route of ROUTES) validatePage(locale, route);
  }
  validateSitemap();
  validate404();
  validateForbiddenExportText();

  if (failures.length > 0) {
    console.error(`✗ Export inválido: ${failures.length} error(es), ${checks} comprobaciones.`);
    const limit = 100;
    for (const failure of failures.slice(0, limit)) console.error(`  - ${failure}`);
    if (failures.length > limit) {
      console.error(`  - … ${failures.length - limit} error(es) adicionales omitidos.`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(`✓ Export válido: 104 URL canónicas, ${checks} comprobaciones.`);
}

main();
