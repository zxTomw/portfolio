import { Intro } from "@/components/intro";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="container mx-auto px-1 flex flex-col pb-32">
      <Intro />
      <Projects />
    </div>
  );
}
