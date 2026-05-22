import type { Metadata } from "next";
import { CategoryProgramsPage } from "@/components/CategoryProgramsPage";
import { adultPage } from "@/data/category-pages";

export const metadata: Metadata = {
  title: "Adult Continuing Education | Rose Creative Labs",
  description:
    "Multi-week adult art courses in St. Louis — oil painting, linocut printmaking, and stained glass with expert instruction.",
};

type Props = {
  searchParams: Promise<{ program?: string }>;
};

export default async function AdultContinuingEducationPage({
  searchParams,
}: Props) {
  const { program: preselectedProgram } = await searchParams;
  return (
    <CategoryProgramsPage content={adultPage} preselectedProgram={preselectedProgram} />
  );
}
