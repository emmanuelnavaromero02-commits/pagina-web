"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CONTACT_ENDPOINT } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "success" | "error";

type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "Fábrica de Software",
  message: "",
};

const services = [
  "Fábrica de Software",
  "SAP & Integraciones",
  "Cloud & Data",
  "IA Empresarial",
  "Copiloto Empresarial",
  "Diagnóstico inicial",
];

function validate(values: FormValues) {
  const errors: Partial<Record<keyof FormValues, string>> = {};
  if (!values.name.trim()) errors.name = "El nombre es obligatorio.";
  if (!values.company.trim()) errors.company = "La empresa es obligatoria.";
  if (!values.email.trim()) {
    errors.email = "El correo es obligatorio.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Formato de correo inválido.";
  }
  if (values.phone && !/^[+\d\s()-]{6,}$/.test(values.phone)) {
    errors.phone = "Teléfono inválido.";
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Cuéntanos un poco más (mínimo 10 caracteres).";
  }
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormValues, string>>
  >({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = validate(values);
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setStatus("sending");
    setServerMessage(null);

    // Si no hay endpoint configurado, no llamamos a un backend inventado.
    // En su lugar mostramos un estado controlado para que el cliente sepa
    // que aún falta conectar API Gateway + Lambda + SES.
    if (!CONTACT_ENDPOINT) {
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
      setServerMessage(
        "Mensaje listo para enviar. Conecta NEXT_PUBLIC_CONTACT_ENDPOINT (API Gateway + Lambda + SES) para entregarlo al buzón corporativo.",
      );
      setValues(initialValues);
      return;
    }

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Respuesta no OK");
      setStatus("success");
      setServerMessage("Recibimos tu mensaje. Te contactaremos en breve.");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setServerMessage(
        "No pudimos enviar tu mensaje. Inténtalo de nuevo en unos minutos o escríbenos por correo.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Nombre"
          htmlFor="name"
          error={errors.name}
          required
        >
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass(!!errors.name)}
            placeholder="Nombre y apellido"
            required
          />
        </Field>
        <Field
          label="Empresa"
          htmlFor="company"
          error={errors.company}
          required
        >
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            className={inputClass(!!errors.company)}
            placeholder="Nombre de la empresa"
            required
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Correo corporativo"
          htmlFor="email"
          error={errors.email}
          required
        >
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass(!!errors.email)}
            placeholder="nombre@empresa.com"
            required
          />
        </Field>
        <Field
          label="Teléfono"
          htmlFor="phone"
          error={errors.phone}
          optional
        >
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass(!!errors.phone)}
            placeholder="+52 55 0000 0000"
          />
        </Field>
      </div>

      <Field label="Servicio de interés" htmlFor="service">
        <select
          id="service"
          name="service"
          value={values.service}
          onChange={(e) => update("service", e.target.value)}
          className={inputClass(false)}
        >
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Mensaje"
        htmlFor="message"
        error={errors.message}
        required
      >
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className={cn(inputClass(!!errors.message), "h-auto resize-y py-3")}
          placeholder="Cuéntanos brevemente el contexto y qué te gustaría resolver."
          required
        />
      </Field>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-500">
          Al enviar aceptas que tratemos tus datos para responderte. Sin spam,
          sin compartir con terceros.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={status === "sending"}
          className="sm:min-w-44"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Mail className="h-4 w-4" />
              Enviar mensaje
            </>
          )}
        </Button>
      </div>

      {serverMessage ? (
        <div
          role="status"
          className={cn(
            "flex items-start gap-2 rounded-lg border px-4 py-3 text-sm",
            status === "success"
              ? "border-accent-400/40 bg-accent-400/10 text-accent-600"
              : "border-red-200 bg-red-50 text-red-700",
          )}
        >
          {status === "success" ? (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          ) : null}
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
          <span className="text-xs font-normal text-ink-400">Opcional</span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>
      ) : null}
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
