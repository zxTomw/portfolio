import { InteractiveUW } from "./ui/interactive-uw";
import { InteractiveHeading } from "./ui/interactive-heading";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Separator } from "@/components/ui/separator";

export function Intro() {
  return (
    <div className="flex gap-14 items-center flex-wrap w-full py-12 px-12 sm:px-14 min-h-screen">
      <div>
        <div className="flex justify-between gap-10 items-center flex-wrap">
          <InteractiveHeading />
        </div>
        <p>
          a 3rd year computer science student at&nbsp;
          <InteractiveUW />
          <br />I am passionate about software engineering, machine learning,
          and robotics.
        </p>
      </div>
    </div>
  );
}
