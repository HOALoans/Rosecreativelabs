export type Program = {
  title: string;
  description: string;
  ageRange: string;
  duration: string;
  pricing: string;
};

export type ProgramCategory = {
  id: string;
  name: string;
  programs: Program[];
};

export const programCatalog: ProgramCategory[] = [
  {
    id: "elementary",
    name: "Elementary School (K–5)",
    programs: [
      {
        title: "Art Foundations Residency",
        description:
          "A multi-week in-school program exploring color, line, shape, and texture through hands-on projects aligned to visual arts learning standards.",
        ageRange: "Ages 5–10",
        duration: "6 weeks · 1 session/week",
        pricing: "From $1,800 / residency",
      },
      {
        title: "Color & Creativity Workshop",
        description:
          "Single-session or short-series workshops focused on color mixing, playful experimentation, and creative confidence for young learners.",
        ageRange: "Ages 5–10",
        duration: "1–3 sessions",
        pricing: "$150–$250 / session",
      },
      {
        title: "Storybook Illustration",
        description:
          "Students create original characters and illustrated narratives, connecting literacy goals with visual storytelling and drawing skills.",
        ageRange: "Ages 6–10",
        duration: "4 sessions",
        pricing: "From $600 / series",
      },
    ],
  },
  {
    id: "middle",
    name: "Middle School (6–8)",
    programs: [
      {
        title: "Artists Who Changed the World",
        description:
          "A series connecting art history to social studies. Students explore influential artists and create works inspired by their legacy.",
        ageRange: "Ages 10–14",
        duration: "4 sessions",
        pricing: "From $700 / series",
      },
      {
        title: "Mixed Media Exploration",
        description:
          "Hands-on projects combining drawing, collage, and paint to build technical skills and personal creative voice.",
        ageRange: "Ages 11–14",
        duration: "5 sessions",
        pricing: "From $850 / series",
      },
      {
        title: "Art & Social Justice",
        description:
          "Discussion-based studio sessions examining how artists address community, identity, and change through visual work.",
        ageRange: "Ages 12–14",
        duration: "4 sessions",
        pricing: "From $750 / series",
      },
    ],
  },
  {
    id: "high",
    name: "High School (9–12)",
    programs: [
      {
        title: "Portfolio Development",
        description:
          "Structured guidance for students building application portfolios with critique, technique refinement, and presentation skills.",
        ageRange: "Ages 14–18",
        duration: "6–8 sessions",
        pricing: "From $1,200 / series",
      },
      {
        title: "Advanced Studio Practice",
        description:
          "Open-studio format for experienced students exploring independent projects with professional materials and mentorship.",
        ageRange: "Ages 15–18",
        duration: "Flexible · 6+ sessions",
        pricing: "Custom quote",
      },
      {
        title: "Public Art & Community Design",
        description:
          "Collaborative projects connecting students to place-making, mural planning, and community-centered design thinking.",
        ageRange: "Ages 14–18",
        duration: "6–10 sessions",
        pricing: "Custom quote",
      },
    ],
  },
  {
    id: "corporate",
    name: "Corporate Team Building",
    programs: [
      {
        title: "Creative Thinking Through Art",
        description:
          "Facilitated studio session using drawing and mixed media to spark collaboration, communication, and creative problem-solving.",
        ageRange: "Adults · Teams",
        duration: "2–3 hours",
        pricing: "$500–$800 / session",
      },
      {
        title: "Collaborative Mural Workshop",
        description:
          "Teams co-create a large-scale artwork reflecting shared values — ideal for offsites, retreats, and culture-building events.",
        ageRange: "Adults · Teams",
        duration: "Half or full day",
        pricing: "From $1,500",
      },
      {
        title: "Mindful Sketching Session",
        description:
          "A calm, guided drawing experience focused on presence and reflection — perfect for wellness weeks and leadership retreats.",
        ageRange: "Adults · Teams",
        duration: "90 minutes",
        pricing: "$400–$600 / session",
      },
    ],
  },
  {
    id: "adult",
    name: "Adult Continuing Education",
    programs: [
      {
        title: "Beginner Painting Series",
        description:
          "Step-by-step introduction to acrylic painting covering color, composition, and technique in a supportive small-group setting.",
        ageRange: "Adults 18+",
        duration: "4 sessions",
        pricing: "From $320 / series",
      },
      {
        title: "Art History & Appreciation",
        description:
          "Engaging survey of movements and artists with discussion, visual analysis, and optional sketching exercises.",
        ageRange: "Adults 18+",
        duration: "4–6 sessions",
        pricing: "From $280 / series",
      },
      {
        title: "Expressive Arts for Wellness",
        description:
          "Process-focused art-making for stress relief and self-expression — no prior art experience required.",
        ageRange: "Adults 18+",
        duration: "3–5 sessions",
        pricing: "From $240 / series",
      },
    ],
  },
];
