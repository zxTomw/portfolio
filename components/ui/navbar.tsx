import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentNoneIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { MailIcon } from "lucide-react";
import { portfolioConfig } from "@/portfolio";

export function Navbar() {
  const { email, linkedin, github } = portfolioConfig;
  return (
    <nav
      className="flex justify-between items-center top-0
           py-4 fixed z-10 px-10 backdrop-blur-md w-full"
    >
      <div className="flex gap-10 items-center">
        <Link href="/">
          <ComponentNoneIcon className="h-5 w-5" />
        </Link>
        <a className="sm:inline hidden" href="#proj">
          Projects
        </a>
      </div>
      <div className="flex gap-5 items-center text-muted-foreground">
        <Link href={`mailto:${email}`}>
          <MailIcon className="h-6 w-6 hover:text-foreground" />
        </Link>
        <Link href={github} target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            className="h-[1.4rem] hover:text-foreground"
          />
        </Link>
        <Link href={linkedin} target="_blank">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="h-6 hover:text-foreground"
          />
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
