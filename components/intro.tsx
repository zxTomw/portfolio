import { InteractiveUW } from "./ui/interactive-uw";
import { InteractiveHeading } from "./ui/interactive-heading";

export function Intro() {
  return (
    <div className="flex gap-14 items-center w-full py-12 px-12 sm:px-14 min-h-screen">
      <div>
        <InteractiveHeading />
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
