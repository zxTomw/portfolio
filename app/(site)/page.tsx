import { Intro } from "@/components/intro";
import { Projects } from "@/components/projects";
import { getProjects, getSiteSettings } from "@/lib/cms";

export default async function Home() {
  const [projects, siteSettings] = await Promise.all([
    getProjects(),
    getSiteSettings(),
  ]);

  return (
    <main className="container mx-auto px-1 flex flex-col min-h-fit">
      <Intro links={siteSettings} />
      <Projects projects={projects} />
    </main>
  );
}
