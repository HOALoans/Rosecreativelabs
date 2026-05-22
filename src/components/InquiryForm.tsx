"use client";

import { useState } from "react";
import { programInquiryOptions } from "@/data/programs";

const programOptions = [...programInquiryOptions, "Custom / not sure yet"];

const ageGroupOptions = [
  "Elementary (K–5)",
  "Middle school (6–8)",
  "High school (9–12)",
  "Mixed ages",
  "Adults",
  "Corporate team",
  "Other",
];

const inputClass =
  "w-full rounded-lg border border-border bg-white px-4 py-2.5 font-sans text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-rose-mid";

const inputErrorClass =
  "w-full rounded-lg border border-rose-warm bg-white px-4 py-2.5 font-sans text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-rose-mid";

const labelClass = "mb-1.5 block font-sans text-xs font-medium text-rose-deep";

type FormData = {
  organization: string;
  contactName: string;
  email: string;
  phone: string;
  programInterest: string;
  ageGroup: string;
  preferredDates: string;
  notes: string;
};

const initialFormData: FormData = {
  organization: "",
  contactName: "",
  email: "",
  phone: "",
  programInterest: "",
  ageGroup: "",
  preferredDates: "",
  notes: "",
};

type FieldErrors = Partial<Record<keyof FormData, string>>;

function validateForm(data: FormData): FieldErrors {
  const errors: FieldErrors = {};

  if (!data.organization.trim()) {
    errors.organization = "Organization name is required.";
  }
  if (!data.contactName.trim()) {
    errors.contactName = "Contact name is required.";
  }
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.programInterest) {
    errors.programInterest = "Please select a program.";
  }
  if (!data.ageGroup) {
    errors.ageGroup = "Please select an age group.";
  }

  return errors;
}

export function InquiryForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    setSubmitError(null);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError(null);

    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await res.json()) as { error?: string; success?: boolean };

      if (!res.ok) {
        setSubmitError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError(
        "Unable to reach the server. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-rose-light bg-rose-pale px-6 py-10 text-center">
        <p className="font-serif text-xl text-rose-deep">Thank you for reaching out!</p>
        <p className="mt-2 font-sans text-sm text-muted">
          We&apos;ve received your inquiry and will respond within two business days.
        </p>
      </div>
    );
  }

  function fieldClass(field: keyof FormData) {
    return fieldErrors[field] ? inputErrorClass : inputClass;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 md:grid-cols-2">
      {submitError && (
        <div
          role="alert"
          className="rounded-lg border border-rose-warm bg-rose-pale px-4 py-3 font-sans text-sm text-rose-deep md:col-span-2"
        >
          {submitError}
        </div>
      )}

      <div>
        <label htmlFor="organization" className={labelClass}>
          Organization name <span className="text-rose-mid">*</span>
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          required
          value={formData.organization}
          onChange={(e) => updateField("organization", e.target.value)}
          className={fieldClass("organization")}
          aria-invalid={!!fieldErrors.organization}
          aria-describedby={fieldErrors.organization ? "organization-error" : undefined}
        />
        {fieldErrors.organization && (
          <p id="organization-error" className="mt-1 font-sans text-xs text-rose-warm">
            {fieldErrors.organization}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contactName" className={labelClass}>
          Contact name <span className="text-rose-mid">*</span>
        </label>
        <input
          id="contactName"
          name="contactName"
          type="text"
          required
          value={formData.contactName}
          onChange={(e) => updateField("contactName", e.target.value)}
          className={fieldClass("contactName")}
          aria-invalid={!!fieldErrors.contactName}
        />
        {fieldErrors.contactName && (
          <p className="mt-1 font-sans text-xs text-rose-warm">{fieldErrors.contactName}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span className="text-rose-mid">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          className={fieldClass("email")}
          aria-invalid={!!fieldErrors.email}
        />
        {fieldErrors.email && (
          <p className="mt-1 font-sans text-xs text-rose-warm">{fieldErrors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="programInterest" className={labelClass}>
          Program interest <span className="text-rose-mid">*</span>
        </label>
        <select
          id="programInterest"
          name="programInterest"
          required
          value={formData.programInterest}
          onChange={(e) => updateField("programInterest", e.target.value)}
          className={fieldClass("programInterest")}
          aria-invalid={!!fieldErrors.programInterest}
        >
          <option value="" disabled>
            Select a program
          </option>
          {programOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {fieldErrors.programInterest && (
          <p className="mt-1 font-sans text-xs text-rose-warm">
            {fieldErrors.programInterest}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="ageGroup" className={labelClass}>
          Age group <span className="text-rose-mid">*</span>
        </label>
        <select
          id="ageGroup"
          name="ageGroup"
          required
          value={formData.ageGroup}
          onChange={(e) => updateField("ageGroup", e.target.value)}
          className={fieldClass("ageGroup")}
          aria-invalid={!!fieldErrors.ageGroup}
        >
          <option value="" disabled>
            Select age group
          </option>
          {ageGroupOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {fieldErrors.ageGroup && (
          <p className="mt-1 font-sans text-xs text-rose-warm">{fieldErrors.ageGroup}</p>
        )}
      </div>

      <div className="md:col-span-2">
        <label htmlFor="preferredDates" className={labelClass}>
          Preferred dates
        </label>
        <input
          id="preferredDates"
          name="preferredDates"
          type="text"
          placeholder="e.g. Fall 2025, weekdays after 3pm"
          value={formData.preferredDates}
          onChange={(e) => updateField("preferredDates", e.target.value)}
          className={inputClass}
        />
      </div>

      <div className="md:col-span-2">
        <label htmlFor="notes" className={labelClass}>
          Additional notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          value={formData.notes}
          onChange={(e) => updateField("notes", e.target.value)}
          className={`${inputClass} resize-y`}
          placeholder="Tell us about your group size, goals, or any questions..."
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-rose-mid px-8 py-3 font-sans text-sm font-medium text-cream transition-colors hover:bg-rose-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : "Submit inquiry →"}
        </button>
      </div>
    </form>
  );
}
