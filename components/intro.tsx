import { InteractiveUW } from "./ui/interactive-uw";
import { InteractiveHeading } from "./ui/interactive-heading";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Separator } from "@/components/ui/separator";
import { portfolioConfig } from "@/portfolio";
import { Button } from "./ui/button";
import { BlurFade } from "./ui/blur-fade";

export function Intro() {
  const { email, linkedin, github } = portfolioConfig;
  return (
    <div className="flex gap-14 items-center flex-wrap w-full py-12 px-12 sm:px-14 min-h-screen">
      <div className="">
        <div className="flex justify-between gap-10 items-center flex-wrap">
          <InteractiveHeading />
        </div>
        <p className="fade-in transition-all">
          a 3rd year computer science student at&nbsp;
          <InteractiveUW />
          <br />I am passionate about software engineering, machine learning,
          and robotics.
        </p>
        <BlurFade delay={0.7} inView>
          <div className="flex gap-3 items-center text- pt-2">
            <a href={`mailto:${email}`} className="hover:underline">
              Contact
            </a>
            <Separator orientation="vertical" className="h-6" />
            <a className="hover:underline" href="/resume.pdf" target="_blank">
              Resumé
            </a>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
