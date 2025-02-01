import Image from "next/image";
import { BlurFade } from "./ui/blur-fade";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ThemedMagicCard } from "./themed-magic-card";

const projectList = [
  {
    id: "path-robot",
    image: "/projects/path-robot.png",
    title: "Pathfinding Robot",
    group: "group",
    github: "https://github.com/kenoi1/wato-asd",
    description:
      "A simulated robot equipped with lidar that evaluates the objects around it and finds the shortest path to the destination.",
    techStack: ["C++", "ROS", "CMake", "Docker", "Foxglove Studio"],
  },
  {
    id: "navgoose",
    image: "/projects/navgoose.jpg",
    title: "NavGoose",
    description:
      "A hardware project that uses a Raspberry Pi connected to a camera to\
    detect objects on the ground for visual impared individuals. Used\
     custom-trained YOLOV11 model for object detection.",
    github: "https://github.com/kenoi1/geesehack",
    group: "group",
    techStack: [
      "Python",
      "YOLOV11",
      "Raspberry Pi",
      "OpenCV",
      "PyTorch",
      "WebSocket",
      "Flask",
    ],
  },
  {
    id: "personal-notes",
    title: "PersonalNotes",
    description:
      "An LLM-powered note-taking app that aggregates your notes and\
    documents. Utilized OpenAI platform and LangChain to generate summaries, \
    flash cards and test questions.",
    group: "group",
    image: "/projects/personal-notes.png",
    github: "https://github.com/zxTomw/HTN2024",
    techStack: [
      "React",
      "Next.js",
      "Flask",
      "PostgreSQL",
      "OpenAI",
      "LangChain",
      "Vercel",
      "Tailwind CSS",
      "Bun",
    ],
  },
  {
    id: "cli-chess",
    title: "CLI Chess",
    description:
      "A command line chess game with hard-level AI's and multiplayer modes.\
     Built with C++, and utilized Minimax algorithm with alpha-beta pruning.",
    group: "group",
    image: "/projects/chess.png",
    github: "https://github.com/RC074/CS246-Chess",
    techStack: ["C++", "CMake", "GNU", "Clang"],
  },
];

export function Projects() {
  return (
    <div className="px-12 py-12 sm:px-14 flex flex-col gap-8 pt-23 " id="proj">
      <h2 className="font-semibold text-3xl pt-5">Projects</h2>
      <div className="flex gap-12 flex-row flex-wrap justify-between h-fit">
        {projectList.map((project, index) => (
          <BlurFade key={project.title} delay={index * 0.05} inView>
            <ThemedMagicCard>
              <div className="h-full w-full flex flex-col p-[0.07rem]">
                <div className="relative w-full h-52 rounded-t-[0.7rem] overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} cover image`}
                      fill
                      className="object-cover "
                    />
                  ) : (
                    <Image
                      src={"/none.svg"}
                      alt={`${project.title} cover image`}
                      className="object-contain p-10"
                      fill
                    />
                  )}
                </div>
                <div className="flex-grow p-5 pt-7 flex flex-col justify-between gap-7">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-2">
                      <h3 className="font-semibold text-xl">{project.title}</h3>
                      {/* <Users size={15} /> */}
                      {project.github && (
                        <Link href={project.github} target="_blank">
                          <GitHubLogoIcon className="h-5 w-5" />
                        </Link>
                      )}
                    </div>
                    <p>{project.description}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">
                      {project.techStack.join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            </ThemedMagicCard>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
