import { Intro } from "@/components/intro";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="container mx-auto px-1 flex flex-col min-h-fit">
      <Intro />
      <Projects />
    </main>
  );
}
