import { Resend } from "resend";
import { NextResponse } from "next/server";

const TO_EMAIL =
  process.env.CONTACT_EMAIL_TO ?? "inquiries-placeholder@rosecreativelabs.com";

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "Rose Creative Labs <onboarding@resend.dev>";

type ContactBody = {
  organization?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  programInterest?: string;
  ageGroup?: string;
  preferredDates?: string;
  notes?: string;
};

function validate(body: ContactBody): string | null {
  const organization = body.organization?.trim();
  const contactName = body.contactName?.trim();
  const email = body.email?.trim();
  const programInterest = body.programInterest?.trim();
  const ageGroup = body.ageGroup?.trim();

  if (!organization) return "Organization name is required.";
  if (!contactName) return "Contact name is required.";
  if (!email) return "Email is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return "Please enter a valid email address.";
  if (!programInterest) return "Program interest is required.";
  if (!ageGroup) return "Age group is required.";

  return null;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const organization = body.organization!.trim();
  const contactName = body.contactName!.trim();
  const email = body.email!.trim();
  const phone = body.phone?.trim() || "Not provided";
  const programInterest = body.programInterest!.trim();
  const ageGroup = body.ageGroup!.trim();
  const preferredDates = body.preferredDates?.trim() || "Not provided";
  const notes = body.notes?.trim() || "None";

  const html = `
    <h2>New program inquiry — Rose Creative Labs</h2>
    <table style="border-collapse:collapse;width:100%;max-width:560px;">
      <tr><td style="padding:8px 0;font-weight:bold;">Organization</td><td style="padding:8px 0;">${escapeHtml(organization)}</td></tr>
      <tr><td style="padding:8px 0;font-weight:bold;">Contact name</td><td style="padding:8px 0;">${escapeHtml(contactName)}</td></tr>
      <tr><td style="padding:8px 0;font-weight:bold;">Email</td><td style="padding:8px 0;">${escapeHtml(email)}</td></tr>
      <tr><td style="padding:8px 0;font-weight:bold;">Phone</td><td style="padding:8px 0;">${escapeHtml(phone)}</td></tr>
      <tr><td style="padding:8px 0;font-weight:bold;">Program interest</td><td style="padding:8px 0;">${escapeHtml(programInterest)}</td></tr>
      <tr><td style="padding:8px 0;font-weight:bold;">Age group</td><td style="padding:8px 0;">${escapeHtml(ageGroup)}</td></tr>
      <tr><td style="padding:8px 0;font-weight:bold;">Preferred dates</td><td style="padding:8px 0;">${escapeHtml(preferredDates)}</td></tr>
      <tr><td style="padding:8px 0;font-weight:bold;vertical-align:top;">Additional notes</td><td style="padding:8px 0;">${escapeHtml(notes).replace(/\n/g, "<br>")}</td></tr>
    </table>
  `;

  const text = [
    "New program inquiry — Rose Creative Labs",
    "",
    `Organization: ${organization}`,
    `Contact name: ${contactName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Program interest: ${programInterest}`,
    `Age group: ${ageGroup}`,
    `Preferred dates: ${preferredDates}`,
    `Additional notes: ${notes}`,
  ].join("\n");

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Program inquiry from ${organization}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send your inquiry. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send your inquiry. Please try again." },
      { status: 500 }
    );
  }
}
