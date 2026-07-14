"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CONTACT_ENDPOINT, SITE } from "@/lib/constants";
import { BUILD_LOCALE, l } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "success" | "error";

const SERVICES = [
  {
    value: "software-factory",
    label: l("Fábrica de software", "Software Factory"),
  },
  {
    value: "enterprise-integration",
    label: l("Integración empresarial", "Enterprise Integration"),
  },
  {
    value: "cloud-data",
    label: l("Nube y datos gobernados", "Cloud & Governed Data"),
  },
  {
    value: "operational-ai",
    label: l("IA operacional", "Operational AI"),
  },
  { value: "enterprise-copilot", label: "Enterprise Copilot" },
  {
    value: "initial-diagnosis",
    label: l("Diagnóstico inicial", "Initial diagnosis"),
  },
] as const;

type AllowedService = (typeof SERVICES)[number]["value"];

const ALLOWED_TOPICS = [
  "software",
  "copilot",
  "finance",
  "operations",
  "hr",
  "reporting",
  "sap",
  "automation",
  "support",
  "governance",
] as const;

type AllowedTopic = (typeof ALLOWED_TOPICS)[number];

const TOPIC_SERVICE: Record<AllowedTopic, AllowedService> = {
  software: "software-factory",
  copilot: "enterprise-copilot",
  finance: "operational-ai",
  operations: "operational-ai",
  hr: "operational-ai",
  reporting: "cloud-data",
  sap: "enterprise-integration",
  automation: "operational-ai",
  support: "software-factory",
  governance: "cloud-data",
};

type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: AllowedService;
  message: string;
  privacyAccepted: boolean;
  website: string;
};

type ErrorKey = Exclude<keyof FormValues, "website">;

const initialValues: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "initial-diagnosis",
  message: "",
  privacyAccepted: false,
  website: "",
};

function validate(values: FormValues) {
  const errors: Partial<Record<ErrorKey, string>> = {};
  if (values.name.trim().length < 2) {
    errors.name = l("Escribe tu nombre.", "Enter your name.");
  }
  if (values.company.trim().length < 2) {
    errors.company = l("Escribe el nombre de la empresa.", "Enter the company name.");
  }
  if (!values.email.trim()) {
    errors.email = l("El correo es obligatorio.", "Email is required.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = l("El formato del correo no es válido.", "The email format is invalid.");
  }
  if (values.phone && !/^[+\d\s().-]{6,30}$/.test(values.phone)) {
    errors.phone = l("El teléfono no es válido.", "The phone number is invalid.");
  }
  if (values.message.trim().length < 10) {
    errors.message = l(
      "Describe brevemente el caso (mínimo 10 caracteres).",
      "Briefly describe the case (minimum 10 characters).",
    );
  }
  if (!values.privacyAccepted) {
    errors.privacyAccepted = l(
      "Debes confirmar que leíste el aviso de privacidad.",
      "You must confirm that you read the privacy notice.",
    );
  }
  return errors;
}

function readTopic(): AllowedTopic | undefined {
  const topic = new URLSearchParams(window.location.search).get("topic");
  return ALLOWED_TOPICS.find((allowed) => allowed === topic);
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [topic, setTopic] = useState<AllowedTopic>();
  const [errors, setErrors] = useState<Partial<Record<ErrorKey, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const formStartedAt = useRef(Date.now());

  useEffect(() => {
    const selectedTopic = readTopic();
    if (!selectedTopic) return;
    setTopic(selectedTopic);
    setValues((current) => ({
      ...current,
      service: TOPIC_SERVICE[selectedTopic],
    }));
  }, []);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((previous) => ({ ...previous, [key]: value }));
    if (key !== "website" && errors[key as ErrorKey]) {
      setErrors((previous) => ({ ...previous, [key as ErrorKey]: undefined }));
    }
    if (status !== "idle") {
      setStatus("idle");
      setServerMessage(null);
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!CONTACT_ENDPOINT) {
      setStatus("error");
      setServerMessage(
        l(
          `El envío web aún no está configurado. Escríbenos a ${SITE.contact.email}.`,
          `Web delivery is not configured yet. Email us at ${SITE.contact.email}.`,
        ),
      );
      return;
    }

    setStatus("sending");
    setServerMessage(null);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 12_000);

    try {
      const payload = {
        name: values.name.trim(),
        company: values.company.trim(),
        email: values.email.trim().toLowerCase(),
        ...(values.phone.trim() ? { phone: values.phone.trim() } : {}),
        service: values.service,
        message: values.message.trim(),
        ...(topic ? { topic } : {}),
        locale: BUILD_LOCALE,
        privacyAccepted: true as const,
        website: values.website,
        formStartedAt: formStartedAt.current,
      };

      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      if (response.status === 200) {
        setStatus("success");
        setServerMessage(
          l(
            "Recibimos tu mensaje. Nuestro objetivo es responder en un día hábil.",
            "We received your message. Our target is to reply within one business day.",
          ),
        );
        setValues(initialValues);
        setTopic(undefined);
        formStartedAt.current = Date.now();
        return;
      }

      setStatus("error");
      if (response.status === 400) {
        setServerMessage(l("Revisa los datos enviados.", "Please review the submitted data."));
      } else if (response.status === 403) {
        setServerMessage(
          l(
            "La verificación de seguridad rechazó el envío. Recarga la página e inténtalo de nuevo.",
            "The security check rejected the submission. Reload the page and try again.",
          ),
        );
      } else if (response.status === 429) {
        setServerMessage(
          l(
            "Se alcanzó el límite temporal de envíos. Inténtalo más tarde.",
            "The temporary submission limit was reached. Try again later.",
          ),
        );
      } else {
        setServerMessage(
          l(
            `No pudimos enviar el mensaje. Inténtalo de nuevo o escribe a ${SITE.contact.email}.`,
            `We could not send the message. Try again or email ${SITE.contact.email}.`,
          ),
        );
      }
    } catch {
      setStatus("error");
      setServerMessage(
        l(
          `La solicitud tardó demasiado o no hubo conexión. Escribe a ${SITE.contact.email}.`,
          `The request timed out or the connection failed. Email ${SITE.contact.email}.`,
        ),
      );
    } finally {
      window.clearTimeout(timeout);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={l("Nombre", "Name")} htmlFor="name" error={errors.name} required>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            className={inputClass(Boolean(errors.name))}
            placeholder={l("Nombre y apellidos", "First and last name")}
            maxLength={120}
            aria-invalid={Boolean(errors.name)}
            required
          />
        </Field>
        <Field label={l("Empresa", "Company")} htmlFor="company" error={errors.company} required>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={(event) => update("company", event.target.value)}
            className={inputClass(Boolean(errors.company))}
            placeholder={l("Nombre de la empresa", "Company name")}
            maxLength={160}
            aria-invalid={Boolean(errors.company)}
            required
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={l("Correo corporativo", "Corporate email")} htmlFor="email" error={errors.email} required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            className={inputClass(Boolean(errors.email))}
            placeholder={l("nombre@empresa.com", "name@company.com")}
            maxLength={254}
            aria-invalid={Boolean(errors.email)}
            required
          />
        </Field>
        <Field label={l("Teléfono", "Phone")} htmlFor="phone" error={errors.phone} optional>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={inputClass(Boolean(errors.phone))}
            placeholder="+52 55 0000 0000"
            maxLength={30}
            aria-invalid={Boolean(errors.phone)}
          />
        </Field>
      </div>

      <Field label={l("Área de interés", "Area of interest")} htmlFor="service">
        <select
          id="service"
          name="service"
          value={values.service}
          onChange={(event) => update("service", event.target.value as AllowedService)}
          className={inputClass(false)}
        >
          {SERVICES.map((service) => (
            <option key={service.value} value={service.value}>
              {service.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label={l("Mensaje", "Message")} htmlFor="message" error={errors.message} required>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          className={cn(inputClass(Boolean(errors.message)), "h-auto resize-y py-3")}
          placeholder={l(
            "Describe brevemente el contexto y lo que quieres resolver.",
            "Briefly describe the context and what you want to solve.",
          )}
          minLength={10}
          maxLength={4000}
          aria-invalid={Boolean(errors.message)}
          required
        />
      </Field>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          value={values.website}
          onChange={(event) => update("website", event.target.value)}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-ink-700">
          <input
            type="checkbox"
            checked={values.privacyAccepted}
            onChange={(event) => update("privacyAccepted", event.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-ink-300 text-brand-700 focus:ring-brand-300"
            aria-invalid={Boolean(errors.privacyAccepted)}
            required
          />
          <span>
            {l("He leído el ", "I have read the ")}
            <Link href="/privacy" className="font-medium text-brand-800 underline underline-offset-2">
              {l("aviso de privacidad", "privacy notice")}
            </Link>
            {l(
              " y entiendo el tratamiento necesario para responder esta solicitud.",
              " and understand the processing needed to respond to this request.",
            )}
          </span>
        </label>
        {errors.privacyAccepted ? (
          <p className="mt-1.5 text-xs font-medium text-red-600">{errors.privacyAccepted}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-500">
          {l(
            "Usaremos tus datos solo para atender esta solicitud.",
            "We will use your data only to handle this request.",
          )}
        </p>
        <Button type="submit" size="lg" disabled={status === "sending"} className="sm:min-w-44">
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              {l("Enviando…", "Sending…")}
            </>
          ) : (
            <>
              <Mail className="h-4 w-4" />
              {l("Solicitar diagnóstico", "Request a diagnosis")}
            </>
          )}
        </Button>
      </div>

      {serverMessage ? (
        <div
          role={status === "error" ? "alert" : "status"}
          className={cn(
            "flex items-start gap-2 rounded-lg border px-4 py-3 text-sm",
            status === "success"
              ? "border-accent-400/40 bg-accent-400/10 text-accent-600"
              : "border-red-200 bg-red-50 text-red-700",
          )}
        >
          {status === "success" ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> : null}
          <span>{serverMessage}</span>
        </div>
      ) : null}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 flex items-baseline justify-between text-sm font-medium text-ink-800"
      >
        <span>
          {label}
          {required ? <span className="ml-0.5 text-brand-700">*</span> : null}
        </span>
        {optional ? (
          <span className="text-xs font-normal text-ink-400">{l("Opcional", "Optional")}</span>
        ) : null}
      </label>
      {children}
      {error ? <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p> : null}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "block h-11 w-full rounded-lg border bg-white px-3 text-sm text-ink-900 shadow-sm transition-colors placeholder:text-ink-400",
    "focus:outline-none focus:ring-2 focus:ring-brand-200",
    hasError
      ? "border-red-300 focus:border-red-400"
      : "border-ink-200 focus:border-brand-400",
  );
}
