import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentNoneIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export function Navbar() {
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
        <Link href="https://github.com/zxTomw" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            className="h-5 hover:text-foreground"
          />
        </Link>
        <Link href="https://linkedin.com/in/zxTomw" target="_blank">
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
