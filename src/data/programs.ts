export type Program = {
  title: string;
  description: string;
  ageRange: string;
  duration: string;
  materialsIncluded: string;
  cateringAllowed?: string;
  pricing: string;
};

export type ProgramCategory = {
  id: string;
  name: string;
  grades: string;
  focus: string;
  programs: Program[];
};

export const programCatalog: ProgramCategory[] = [
  {
    id: "elementary",
    name: "Elementary School",
    grades: "Grades K–5",
    focus:
      "Creative exploration, motor skill development, and introduction to fundamental mediums.",
    programs: [
      {
        title: "Little Masters: Mixed Media Adventure",
        description:
          "A vibrant, hands-on introduction to the world of art. Young artists explore a new medium every week—including watercolor, soft clay sculpting, oil pastels, and printmaking. Lessons are interwoven with storytelling, introducing students to legendary artists like Matisse, Van Gogh, and Alma Thomas in a fun, accessible way.",
        ageRange: "Grades K–5",
        duration: "8 weeks · 1.5 hours per session",
        materialsIncluded:
          "Yes — all non-toxic paints, papers, and clay",
        pricing: "$240",
      },
      {
        title: "Clay Play: Introduction to Ceramics",
        description:
          "Designed for tactile learning, this program teaches elementary students the foundational techniques of hand-building with clay. Students master pinch pots, coil structures, and slab building to create whimsical animals, personalized mugs, and decorative tiles. The final two weeks are dedicated to glazing and firing their masterpieces.",
        ageRange: "Grades K–5",
        duration: "6 weeks · 1.5 hours per session",
        materialsIncluded:
          "Yes — clay, glazes, and kiln firing fees included",
        pricing: "$210",
      },
      {
        title: "Eco-Art & Sculpting Studio",
        description:
          "This inventive course merges environmental awareness with artistic expression. Students use recycled, upcycled, and natural materials (like twigs, pressed flowers, and cardboard) to create stunning 3D assemblages and paper-mâché sculptures. Perfect for imaginative children who love to build and care about the planet.",
        ageRange: "Grades K–5",
        duration: "8 weeks · 1.5 hours per session",
        materialsIncluded: "Yes",
        pricing: "$225",
      },
    ],
  },
  {
    id: "middle",
    name: "Middle School",
    grades: "Grades 6–8",
    focus:
      "Technical skill building, identity expression, and introducing specialized tools.",
    programs: [
      {
        title: "Comic & Character Illustration",
        description:
          "Designed for middle schoolers obsessed with graphic novels, manga, and animation. Students learn anatomy, facial expressions, dynamic posing, panel layout, and cell-shading using fine-liner pens and professional alcohol markers. By the end of the course, each student completes a 3-page comic book.",
        ageRange: "Grades 6–8",
        duration: "8 weeks · 2 hours per session",
        materialsIncluded:
          "Yes — professional illustration sketchpad and liner set to keep",
        pricing: "$280",
      },
      {
        title: "Foundations of Acrylic Painting",
        description:
          "Transition from crafts to fine arts. Students learn color theory, paint mixing, brush choice, and depth perception on canvas. Projects include a vibrant pop-art portrait, a dramatic landscape, and a still-life study of their favorite personal objects.",
        ageRange: "Grades 6–8",
        duration: "10 weeks · 2 hours per session",
        materialsIncluded: "Yes — canvases and heavy-body acrylic paints",
        pricing: "$340",
      },
      {
        title: "Wheel Throwing & Pottery Basics",
        description:
          "Students sit behind the pottery wheel and learn the core mechanics of centering clay, pulling walls, throwing functional cylinders, and trimming feet. An excellent environment for teaching patience, focus, and resilience through art.",
        ageRange: "Grades 6–8",
        duration: "6 weeks · 2 hours per session",
        materialsIncluded: "Yes — up to 15 lbs of clay, glazes, and firings",
        pricing: "$265",
      },
    ],
  },
  {
    id: "high",
    name: "High School",
    grades: "Grades 9–12",
    focus:
      "Advanced techniques, portfolio preparation, and conceptual storytelling.",
    programs: [
      {
        title: "Portfolio Development: Advanced Drawing & Life Study",
        description:
          "Tailored for students preparing for AP Art or college applications. This rigorous studio class focuses on classical observational drawing with graphite, charcoal, and conté crayon — complex forms, drapery, structural anatomy, and perspective.",
        ageRange: "Grades 9–12",
        duration: "10 weeks · 2.5 hours per session",
        materialsIncluded:
          "No — student supply list provided; studio provides easels",
        pricing: "$395",
      },
      {
        title: "Digital Painting & Concept Art",
        description:
          "Bridging fine art with modern creative industries. Using studio-provided iPads, Apple Pencils, and Procreate, students learn the digital workflow used by video game and film concept artists — brush customization, layers, lighting, and environmental rendering.",
        ageRange: "Grades 9–12",
        duration: "8 weeks · 2 hours per session",
        materialsIncluded: "Yes — studio iPads and hardware included",
        pricing: "$320",
      },
      {
        title: "Modern Street Art & Mural Design",
        description:
          "Students explore the history of street art and public murals while learning stencil making, wheat-pasting, and aerosol paint control. The class collaborates on a large-scale mural alongside individual canvas works.",
        ageRange: "Grades 9–12",
        duration: "8 weeks · 2.5 hours per session",
        materialsIncluded:
          "Yes — respirators, caps, aerosol, and acrylic paints",
        pricing: "$350",
      },
    ],
  },
  {
    id: "corporate",
    name: "Corporate Team Building",
    grades: "Teams & organizations",
    focus:
      "Collaboration, stress reduction, and communication through low-stakes creativity.",
    programs: [
      {
        title: "The Big Picture Collaborative Mural",
        description:
          "Break down silos and foster corporate unity. Teams paint individual canvas tiles that must align in color and line with their neighbors — assembled at the end to reveal a massive masterpiece suitable for your office lobby.",
        ageRange: "Corporate teams",
        duration: "Single 3-hour workshop",
        materialsIncluded: "Yes — all art supplies provided",
        cateringAllowed: "Yes — BYOB and wine allowed",
        pricing: "$75 / participant (min. 10)",
      },
      {
        title: "Clay & Cabernet: Team Pottery Throwdown",
        description:
          "Swap happy hour for the pottery studio. Lighthearted hand-building with mini-challenges — tallest slab tower, most creative office mug — while enjoying local wines and cheeses.",
        ageRange: "Corporate teams",
        duration: "Single 2.5-hour event",
        materialsIncluded: "Yes — clay and tools provided",
        cateringAllowed: "Yes — complimentary charcuterie board",
        pricing: "$90 / participant (min. 8)",
      },
      {
        title: "Zen & Ink: Mindful Watercolor Workshop",
        description:
          "Destress your workforce with a calming, focus-driven experience. Employees learn fluid watercolor, masking, and ink illustration focused on botanical patterns and abstract geometry — emphasizing mindfulness and mental wellness.",
        ageRange: "Corporate teams",
        duration: "Single 2-hour workshop",
        materialsIncluded: "Yes — watercolor kits provided",
        cateringAllowed: "Yes",
        pricing: "$60 / participant (min. 12)",
      },
    ],
  },
  {
    id: "adult",
    name: "Adult Continuing Education",
    grades: "Adults 18+",
    focus:
      "Lifelong learning, community connection, and specialized craft mastery.",
    programs: [
      {
        title: "Intermediate Oil Painting Studio",
        description:
          "For adults with basic drawing or painting experience ready for oil paints. Learn fat-over-lean rules, underpainting, color harmony, and glazing. Work at your own pace on personal projects with individualized instructor critiques.",
        ageRange: "Adults 18+",
        duration: "8 weeks · 3 hours per session",
        materialsIncluded:
          "No — solvents provided; oil paint and brush list provided",
        pricing: "$380",
      },
      {
        title: "Introduction to Linocut & Block Printmaking",
        description:
          "Discover relief printing. Learn to safely carve original designs into linoleum blocks, ink with brayers, and pull crisp prints on a traditional hand-press — perfect for custom stationery, fine art prints, or textile patterns.",
        ageRange: "Adults 18+",
        duration: "5 weeks · 2.5 hours per session",
        materialsIncluded:
          "Yes — linoleum blocks, carving toolkit, archival paper",
        pricing: "$245",
      },
      {
        title: "Stained Glass Artistry",
        description:
          "A comprehensive introduction to the Tiffany copper foil method. Students learn to safely cut sheet glass, grind edges, apply copper foil, and solder pieces into a beautiful geometric suncatcher.",
        ageRange: "Adults 18+",
        duration: "6 weeks · 3 hours per session",
        materialsIncluded:
          "Yes — safety equipment, glass, copper foil, and solder",
        pricing: "$310",
      },
    ],
  },
];

/** Featured programs shown on the homepage */
export const signaturePrograms = [
  {
    title: "Little Masters: Mixed Media Adventure",
    description:
      "A vibrant K–5 introduction exploring watercolor, clay, pastels, and printmaking through storytelling and master artists.",
    meta: "Grades K–5 · 8 weeks",
    href: "/programs#elementary",
    featured: false,
  },
  {
    title: "Comic & Character Illustration",
    description:
      "Middle schoolers build a 3-page comic while mastering anatomy, panel layout, and professional marker techniques.",
    meta: "Grades 6–8 · 8 weeks",
    href: "/programs#middle",
    featured: true,
  },
  {
    title: "The Big Picture Collaborative Mural",
    description:
      "Corporate teams paint interlocking canvas tiles that assemble into one unified office-ready masterpiece.",
    meta: "Teams · 3-hour workshop",
    href: "/programs#corporate",
    featured: false,
  },
];

export const programInquiryOptions = programCatalog.flatMap((cat) =>
  cat.programs.map((p) => p.title)
);
