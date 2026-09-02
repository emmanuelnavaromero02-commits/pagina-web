import { cpSync, existsSync, mkdirSync, renameSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const staging = path.join(root, ".localized-out");

function remove(target) {
  rmSync(target, { recursive: true, force: true });
}

function build(locale) {
  remove(path.join(root, ".next"));
  remove(path.join(root, "out"));

  const result = spawnSync(process.execPath, [
    path.join(root, "node_modules", "next", "dist", "bin", "next"),
    "build",
  ], {
    cwd: root,
    env: {
      ...process.env,
      NEXT_PUBLIC_SITE_LOCALE: locale,
    },
    stdio: "inherit",
  });

  if (result.status !== 0) process.exit(result.status ?? 1);

  const output = path.join(root, "out");
  if (!existsSync(output)) {
    throw new Error(`Next.js did not create an export for locale ${locale}.`);
  }
  renameSync(output, path.join(staging, locale));
}

remove(staging);
mkdirSync(staging, { recursive: true });

build("es");
build("en");

renameSync(path.join(staging, "es"), path.join(root, "out"));

const englishExport = path.join(staging, "en");
if (!existsSync(path.join(englishExport, "index.html"))) {
  throw new Error("English export did not contain an index page.");
}
cpSync(englishExport, path.join(root, "out", "en"), { recursive: true });

remove(staging);

console.log("Combined localized export written to out/ (es + en). ");
