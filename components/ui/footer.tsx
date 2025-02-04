import { socialLinks } from "@/portfolio";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function Footer() {
  const { linkedin, github } = socialLinks;
  return (
    <footer
      className="px-16 container mx-auto md:py-20 py-12 flex flex-col md:flex-row
      text-muted-foreground justify-between items-start md:items-center"
    >
      <div className="md:flex gap-4 py-1 items-center hidden">
        <Link href={github} target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            className="h-[1.1rem] hover:text-foreground"
          />
        </Link>
        <Link href={linkedin} target="_blank">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="h-5 hover:text-foreground"
          />
        </Link>
      </div>
      <p className="md:text-sm font-semibold md:font-normal">
        Created with NextJS and Shadcn/ui, deployed on Vercel.
      </p>
      <p className="text-sm md:text-base md:font-semibold">by Tom Wang</p>
      <div className="flex gap-3 py-1 items-center md:hidden">
        <Link href="https://github.com/zxTomw" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            className="h-[1.1rem] hover:text-foreground"
          />
        </Link>
        <Link href="https://linkedin.com/in/zxTomw" target="_blank">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="h-5 hover:text-foreground"
          />
        </Link>
      </div>
    </footer>
  );
}
