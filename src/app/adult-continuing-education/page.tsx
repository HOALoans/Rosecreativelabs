import type { Metadata } from "next";
import { CategoryProgramsPage } from "@/components/CategoryProgramsPage";
import { adultPage } from "@/data/category-pages";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Adult Continuing Education",
  description:
    "Adult art classes in St. Louis — multi-week courses in oil painting, linocut printmaking, and stained glass with small-group instruction and studio materials.",
  path: "/adult-continuing-education",
  keywords: [
    "adult art classes St. Louis",
    "oil painting class Missouri",
    "stained glass course St. Louis",
  ],
});

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
