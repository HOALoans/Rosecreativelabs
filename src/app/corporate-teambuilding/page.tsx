import type { Metadata } from "next";
import { CategoryProgramsPage } from "@/components/CategoryProgramsPage";
import { corporatePage } from "@/data/category-pages";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Corporate Team Building",
  description:
    "Creative corporate team building in St. Louis — collaborative mural workshops, pottery events, and mindful watercolor for teams of 8–50+. Materials and facilitation included.",
  path: "/corporate-teambuilding",
  keywords: [
    "corporate art team building St. Louis",
    "creative team building workshop Missouri",
    "office mural team event",
  ],
});

type Props = {
  searchParams: Promise<{ program?: string }>;
};

export default async function CorporateTeambuildingPage({ searchParams }: Props) {
  const { program: preselectedProgram } = await searchParams;
  return (
    <CategoryProgramsPage
      content={corporatePage}
      preselectedProgram={preselectedProgram}
    />
  );
}
