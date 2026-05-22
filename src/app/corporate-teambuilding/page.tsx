import type { Metadata } from "next";
import { CategoryProgramsPage } from "@/components/CategoryProgramsPage";
import { corporatePage } from "@/data/category-pages";

export const metadata: Metadata = {
  title: "Corporate Team Building | Rose Creative Labs",
  description:
    "Collaborative art workshops for corporate teams in St. Louis — murals, pottery, and mindful watercolor with materials included.",
};

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
