"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { AlertCircle, CheckCircle2, Mail, Send } from "lucide-react";
import { siteConfig } from "@/data/mitchfactorial-data";
import { cn } from "@/lib/cn";

const inputClass =
  "min-h-12 rounded-card border border-cream/12 bg-black/60 px-3 text-base font-medium normal-case tracking-normal text-cream outline-none transition placeholder:text-cream/28 focus:border-kompa-gold";
const labelClass =
  "grid gap-2 text-xs font-black uppercase tracking-[0.14em] text-cream/72";
const errorTextClass = "text-xs font-bold normal-case tracking-normal text-haitian-red";

type BookingFields = {
  name: string;
  email: string;
  phone: string;
  city: string;
  eventDate: string;
  venue: string;
  bookingType: string;
  budget: string;
  message: string;
};

type BookingFieldName = keyof BookingFields;
type BookingErrors = Partial<Record<BookingFieldName, string>>;
type FormStatus =
  | {
      type: "success" | "error";
      message: string;
      href?: string;
    }
  | null;

const initialFields: BookingFields = {
  name: "",
  email: "",
  phone: "",
  city: "",
  eventDate: "",
  venue: "",
  bookingType: "",
  budget: "",
  message: "",
};

const requiredFields: Array<{ name: BookingFieldName; label: string }> = [
  { name: "name", label: "Name" },
  { name: "email", label: "Email" },
  { name: "city", label: "City" },
  { name: "eventDate", label: "Event date" },
  { name: "venue", label: "Venue / event name" },
  { name: "bookingType", label: "Booking type" },
  { name: "budget", label: "Budget range" },
  { name: "message", label: "Message" },
];

// TODO: Set NEXT_PUBLIC_BOOKING_FORM_ENDPOINT to a public Formspree,
// Resend, or custom booking endpoint when direct form delivery is ready.
// Never place API keys or private secrets in this public client variable.
const NEXT_PUBLIC_BOOKING_FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_BOOKING_FORM_ENDPOINT?.trim() ?? "";

function validateFields(fields: BookingFields) {
  const nextErrors: BookingErrors = {};

  requiredFields.forEach(({ name, label }) => {
    if (!fields[name].trim()) {
      nextErrors[name] = `${label} is required.`;
    }
  });

  if (fields.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    nextErrors.email = "Enter a valid email address.";
  }

  if (fields.phone.trim() && !/^[+()\-\d.\s]{7,}$/.test(fields.phone)) {
    nextErrors.phone = "Enter a valid phone number or leave it blank.";
  }

  if (fields.message.trim() && fields.message.trim().length < 20) {
    nextErrors.message = "Add a little more context so the booking team can respond well.";
  }

  return nextErrors;
}

function buildMailtoHref(fields: BookingFields) {
  const subject = encodeURIComponent(
    `Booking inquiry from ${fields.name || "M!TCHFACTOR!AL site"}`,
  );
  const body = encodeURIComponent(
    [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Phone: ${fields.phone || "Not provided"}`,
      `City: ${fields.city}`,
      `Event date: ${fields.eventDate}`,
      `Venue/event name: ${fields.venue}`,
      `Booking type: ${fields.bookingType}`,
      `Budget range: ${fields.budget}`,
      "",
      "Message:",
      fields.message,
    ].join("\n"),
  );

  return `mailto:${siteConfig.bookingEmail}?subject=${subject}&body=${body}`;
}

function FieldError({
  id,
  message,
}: {
  id: string;
  message: string | undefined;
}) {
  if (!message) {
    return null;
  }

  return (
    <span id={id} className={errorTextClass}>
      {message}
    </span>
  );
}

export default function BookingForm() {
  const [fields, setFields] = useState<BookingFields>(initialFields);
  const [errors, setErrors] = useState<BookingErrors>({});
  const [status, setStatus] = useState<FormStatus>(null);
  const [submitting, setSubmitting] = useState(false);

  function handleFieldChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const fieldName = event.currentTarget.name as BookingFieldName;
    const { value } = event.currentTarget;

    setFields((currentFields) => ({
      ...currentFields,
      [fieldName]: value,
    }));
    setErrors((currentErrors) => {
      if (!currentErrors[fieldName]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[fieldName];
      return nextErrors;
    });
    setStatus(null);
  }

  function getFieldClass(fieldName: BookingFieldName) {
    return cn(
      inputClass,
      errors[fieldName] &&
        "border-haitian-red/80 bg-haitian-red/10 focus:border-haitian-red",
    );
  }

  function getDescribedBy(fieldName: BookingFieldName) {
    return errors[fieldName] ? `booking-${fieldName}-error` : undefined;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateFields(fields);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({
        type: "error",
        message: "Please fix the highlighted fields before sending the inquiry.",
      });
      return;
    }

    const mailtoHref = buildMailtoHref(fields);
    setSubmitting(true);
    setStatus(null);

    if (!NEXT_PUBLIC_BOOKING_FORM_ENDPOINT) {
      window.location.href = mailtoHref;
      setStatus({
        type: "success",
        message: `Opening a pre-filled email to ${siteConfig.bookingEmail}.`,
        href: mailtoHref,
      });
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch(NEXT_PUBLIC_BOOKING_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...fields,
          bookingEmail: siteConfig.bookingEmail,
          source: "M!TCHFACTOR!AL booking page",
        }),
      });

      if (!response.ok) {
        throw new Error(`Booking endpoint returned ${response.status}`);
      }

      setFields(initialFields);
      setStatus({
        type: "success",
        message:
          "Booking inquiry sent. The M!TCHFACTOR!AL team has the details.",
      });
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message:
          "Direct form delivery did not complete. Use the email fallback to send this inquiry.",
        href: mailtoHref,
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="metal-panel grid gap-4 p-5 sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Name
          <input
            id="booking-name"
            name="name"
            value={fields.name}
            onChange={handleFieldChange}
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={getDescribedBy("name")}
            className={getFieldClass("name")}
          />
          <FieldError id="booking-name-error" message={errors.name} />
        </label>
        <label className={labelClass}>
          Email
          <input
            id="booking-email"
            name="email"
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={getDescribedBy("email")}
            className={getFieldClass("email")}
          />
          <FieldError id="booking-email-error" message={errors.email} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Phone
          <input
            id="booking-phone"
            name="phone"
            type="tel"
            value={fields.phone}
            onChange={handleFieldChange}
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={getDescribedBy("phone")}
            className={getFieldClass("phone")}
          />
          <FieldError id="booking-phone-error" message={errors.phone} />
        </label>
        <label className={labelClass}>
          City
          <input
            id="booking-city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
            autoComplete="address-level2"
            required
            aria-invalid={Boolean(errors.city)}
            aria-describedby={getDescribedBy("city")}
            className={getFieldClass("city")}
          />
          <FieldError id="booking-city-error" message={errors.city} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Event date
          <input
            id="booking-eventDate"
            name="eventDate"
            type="date"
            value={fields.eventDate}
            onChange={handleFieldChange}
            required
            aria-invalid={Boolean(errors.eventDate)}
            aria-describedby={getDescribedBy("eventDate")}
            className={getFieldClass("eventDate")}
          />
          <FieldError id="booking-eventDate-error" message={errors.eventDate} />
        </label>
        <label className={labelClass}>
          Venue / event name
          <input
            id="booking-venue"
            name="venue"
            value={fields.venue}
            onChange={handleFieldChange}
            required
            aria-invalid={Boolean(errors.venue)}
            aria-describedby={getDescribedBy("venue")}
            className={getFieldClass("venue")}
          />
          <FieldError id="booking-venue-error" message={errors.venue} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Booking type
          <select
            id="booking-bookingType"
            name="bookingType"
            value={fields.bookingType}
            onChange={handleFieldChange}
            required
            aria-invalid={Boolean(errors.bookingType)}
            aria-describedby={getDescribedBy("bookingType")}
            className={getFieldClass("bookingType")}
          >
            <option value="" disabled>
              Select one
            </option>
            <option>Club Set</option>
            <option>Festival Set</option>
            <option>Private Event</option>
            <option>Brand Activation</option>
            <option>Radio / Guest Mix</option>
            <option>Hosting / Curation</option>
          </select>
          <FieldError
            id="booking-bookingType-error"
            message={errors.bookingType}
          />
        </label>
        <label className={labelClass}>
          Budget range
          <input
            id="booking-budget"
            name="budget"
            value={fields.budget}
            onChange={handleFieldChange}
            placeholder="$"
            required
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={getDescribedBy("budget")}
            className={getFieldClass("budget")}
          />
          <FieldError id="booking-budget-error" message={errors.budget} />
        </label>
      </div>
      <label className={labelClass}>
        Message
        <textarea
          id="booking-message"
          name="message"
          value={fields.message}
          onChange={handleFieldChange}
          required
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={getDescribedBy("message")}
          className={cn(
            "resize-y rounded-card border border-cream/12 bg-black/60 px-3 py-3 text-base font-medium normal-case tracking-normal text-cream outline-none transition placeholder:text-cream/28 focus:border-kompa-gold",
            errors.message &&
              "border-haitian-red/80 bg-haitian-red/10 focus:border-haitian-red",
          )}
          placeholder="Audience, set length, room details, cultural direction, tech notes, and timing."
        />
        <FieldError id="booking-message-error" message={errors.message} />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="gold-readable focus-ring inline-flex min-h-12 items-center justify-center gap-3 rounded-card border border-kompa-gold bg-kompa-gold px-4 py-2 text-sm font-black uppercase tracking-[0.08em] text-black transition hover:bg-cream disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending inquiry" : "Send booking inquiry"}
        <Send aria-hidden className="h-4 w-4" />
      </button>
      {status ? (
        <div
          role="status"
          aria-live="polite"
          className={cn(
            "rounded-card border p-4 text-sm font-bold leading-6",
            status.type === "success"
              ? "border-kompa-gold/45 bg-kompa-gold/10 text-kompa-gold"
              : "border-haitian-red/50 bg-haitian-red/10 text-cream",
          )}
        >
          <div className="flex items-start gap-3">
            {status.type === "success" ? (
              <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0" />
            ) : (
              <AlertCircle
                aria-hidden
                className="mt-0.5 h-5 w-5 shrink-0 text-haitian-red"
              />
            )}
            <div>
              <p>{status.message}</p>
              {status.href ? (
                <a
                  href={status.href}
                  className="mt-3 inline-flex items-center gap-2 rounded-card border border-cream/15 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-cream transition hover:border-kompa-gold hover:text-kompa-gold"
                >
                  Open email fallback
                  <Mail aria-hidden className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </form>
  );
}
