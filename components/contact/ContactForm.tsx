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
  service: "Software Factory",
  message: "",
};

const SERVICES = [
  "Software Factory",
  "Enterprise Integration",
  "Cloud & Governed Data",
  "Operational AI",
  "Enterprise Copilot",
  "Initial diagnosis",
];

function validate(values: FormValues) {
  const errors: Partial<Record<keyof FormValues, string>> = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.company.trim()) errors.company = "Company is required.";
  if (!values.email.trim()) {
    errors.email = "Corporate email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Invalid email format.";
  }
  if (values.phone && !/^[+\d\s()-]{6,}$/.test(values.phone)) {
    errors.phone = "Invalid phone number.";
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Tell us a bit more (minimum 10 characters).";
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

    // No endpoint configured — show a controlled placeholder state
    // instead of POSTing to an invented backend.
    if (!CONTACT_ENDPOINT) {
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
      setServerMessage(
        "Message ready to send. Set NEXT_PUBLIC_CONTACT_ENDPOINT (API Gateway + Lambda + SES) to deliver it to the corporate inbox.",
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
      if (!res.ok) throw new Error("Non-OK response");
      setStatus("success");
      setServerMessage(
        "We received your message. We will get back to you shortly.",
      );
      setValues(initialValues);
    } catch {
      setStatus("error");
      setServerMessage(
        "We could not send your message. Please try again in a few minutes or reach us by email.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name} required>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass(!!errors.name)}
            placeholder="First and last name"
            required
          />
        </Field>
        <Field
          label="Company"
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
            placeholder="Company name"
            required
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Corporate email"
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
            placeholder="name@company.com"
            required
          />
        </Field>
        <Field label="Phone" htmlFor="phone" error={errors.phone} optional>
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

      <Field label="Area of interest" htmlFor="service">
        <select
          id="service"
          name="service"
          value={values.service}
          onChange={(e) => update("service", e.target.value)}
          className={inputClass(false)}
        >
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Message"
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
          placeholder="Briefly describe the context and what you would like to solve."
          required
        />
      </Field>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-500">
          By submitting you agree that we may process your data to respond. No
          spam, no sharing with third parties.
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
              Sending...
            </>
          ) : (
            <>
              <Mail className="h-4 w-4" />
              Request a diagnosis
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
          <span className="text-xs font-normal text-ink-400">Optional</span>
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
