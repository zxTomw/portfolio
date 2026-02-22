import Image from "next/image";
import { BlurFade } from "./ui/blur-fade";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { faGitlab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ThemedMagicCard } from "./themed-magic-card";
import type { ProjectCard } from "@/lib/cms";

type ProjectsProps = {
  projects: ProjectCard[];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="px-12 py-12 sm:px-14 flex flex-col gap-8 pt-23 " id="proj">
      <h2 className="font-semibold text-3xl pt-5">Projects</h2>
      <div className="flex gap-12 flex-row flex-wrap justify-between h-fit">
        {projects.map((project, index) => (
          <BlurFade key={project.title} delay={index * 0.05} inView>
            <ThemedMagicCard>
              <div className="h-full w-full flex flex-col p-[0.07rem]">
                <div className="relative w-full h-52 rounded-t-[0.7rem] overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} cover image`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 18rem, (max-width: 1280px) 24rem, 20rem"
                      className="object-cover "
                    />
                  ) : (
                    <Image
                      src={"/none.svg"}
                      alt={`${project.title} cover image`}
                      className="object-contain p-10"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 18rem, (max-width: 1280px) 24rem, 20rem"
                    />
                  )}
                </div>
                <div className="flex-grow p-5 pt-7 flex flex-col justify-between gap-7">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-2">
                      <h3 className="font-semibold text-xl">{project.title}</h3>
                      {/* <Users size={15} /> */}
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          aria-label={`${project.title} GitHub repository`}
                        >
                          <GitHubLogoIcon className="h-5 w-5" />
                        </Link>
                      )}
                      {project.gitlab && (
                        <Link
                          href={project.gitlab}
                          target="_blank"
                          aria-label={`${project.title} GitLab repository`}
                        >
                          <FontAwesomeIcon icon={faGitlab} className="h-5 w-5" />
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
