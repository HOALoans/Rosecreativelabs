import type { ReactNode } from "react";

export type CategoryPageContent = {
  categoryId: "corporate" | "adult";
  path: string;
  eyebrow: string;
  title: ReactNode;
  heroDescription: string;
  benefitsTitle: string;
  benefits: { title: string; description: string }[];
  logisticsTitle: string;
  logistics: { label: string; value: string }[];
  stepsTitle: string;
  steps: { step: string; title: string; description: string }[];
  inquiryLead: string;
};

export const corporatePage: CategoryPageContent = {
  categoryId: "corporate",
  path: "/corporate-teambuilding",
  eyebrow: "Corporate team building",
  title: (
    <>
      Creativity that builds <em className="italic text-rose-mid">real connection</em>
    </>
  ),
  heroDescription:
    "Rose Creative Labs brings facilitated art experiences to your office, off-site venue, or our studio — designed to strengthen collaboration, reduce stress, and give teams a shared win they can hang in the lobby.",
  benefitsTitle: "Why teams choose creative workshops",
  benefits: [
    {
      title: "Break down silos",
      description:
        "Collaborative projects like The Big Picture mural require coordination across groups — mirroring how teams work together on real projects.",
    },
    {
      title: "Low-stakes, high-reward",
      description:
        "No performance reviews or slide decks — just hands-on making that levels the playing field between departments and seniority levels.",
    },
    {
      title: "Wellness built in",
      description:
        "Mindful watercolor and pottery sessions give employees permission to slow down, focus, and recharge without leaving the creative thread.",
    },
    {
      title: "Memorable outcomes",
      description:
        "Teams leave with finished work — a unified mural, custom mugs, or personal pieces — plus photos and stories that outlast a standard happy hour.",
    },
  ],
  logisticsTitle: "Event logistics",
  logistics: [
    { label: "Format", value: "Single-session workshops (2–3 hours)" },
    { label: "Location", value: "Your office, rented venue, or our St. Louis studio" },
    { label: "Group size", value: "Minimums from 8–12 participants per workshop" },
    { label: "Materials", value: "All art supplies included — no prep for your team" },
    { label: "Food & beverage", value: "BYOB welcome; charcuterie included on select events" },
    { label: "Pricing", value: "$60–$90 per participant; deposits hold your date" },
  ],
  stepsTitle: "How to book your team event",
  steps: [
    {
      step: "01",
      title: "Share your goals",
      description:
        "Tell us your team size, preferred date, and whether you want collaboration, wellness, or a celebratory social vibe.",
    },
    {
      step: "02",
      title: "Choose a workshop",
      description:
        "We recommend a program — mural, pottery throwdown, or mindful watercolor — and send a quote with minimums and add-ons.",
    },
    {
      step: "03",
      title: "Show up and create",
      description:
        "Madeline facilitates the full experience. We handle setup, instruction, and cleanup so your team can focus on connecting.",
    },
  ],
  inquiryLead:
    "Tell us about your organization, team size, and ideal date. We respond within two business days with availability and a custom quote.",
};

export const adultPage: CategoryPageContent = {
  categoryId: "adult",
  path: "/adult-continuing-education",
  eyebrow: "Adult continuing education",
  title: (
    <>
      Studio programs for <em className="italic text-rose-mid">lifelong learners</em>
    </>
  ),
  heroDescription:
    "Whether you are returning to oil painting, trying stained glass for the first time, or carving your first linoleum block, our adult courses emphasize skill-building, community, and individualized feedback in a supportive studio environment.",
  benefitsTitle: "What makes our adult courses different",
  benefits: [
    {
      title: "Instructor-led mastery",
      description:
        "Multi-week sessions with demos, critiques, and time to work on personal projects — not paint-and-sip templates.",
    },
    {
      title: "Clear skill pathways",
      description:
        "Each course states prerequisites, duration, and what materials are included so you know exactly what you are signing up for.",
    },
    {
      title: "Small-group attention",
      description:
        "Class sizes stay intimate enough for one-on-one guidance on technique, composition, and safe tool use.",
    },
    {
      title: "Take-home skills",
      description:
        "Graduates leave with finished pieces plus the knowledge to keep practicing — from glazing rules to safe glass cutting.",
    },
  ],
  logisticsTitle: "Course details",
  logistics: [
    { label: "Audience", value: "Adults 18+; some courses expect prior drawing or painting experience" },
    { label: "Schedule", value: "5–8 week sessions · 2.5–3 hours per class" },
    { label: "Location", value: "Rose Creative Labs studio, St. Louis, MO" },
    { label: "Materials", value: "Included for most courses; oil painting supplies list provided" },
    { label: "Safety", value: "PPE and proper ventilation for stained glass and solvents" },
    { label: "Tuition", value: "$245–$380 per course; payment plans available on request" },
  ],
  stepsTitle: "How to enroll",
  steps: [
    {
      step: "01",
      title: "Pick your course",
      description:
        "Browse oil painting, linocut printmaking, or stained glass — each with full descriptions, duration, and pricing below.",
    },
    {
      step: "02",
      title: "Submit an inquiry",
      description:
        "Let us know your experience level and preferred start date. We confirm seat availability and any materials you should bring.",
    },
    {
      step: "03",
      title: "Join the studio",
      description:
        "Attend weekly sessions with structured lessons and open studio time to develop work at your own pace.",
    },
  ],
  inquiryLead:
    "Interested in an upcoming session? Share your background and which course appeals to you — we will follow up with schedules and enrollment details.",
};
