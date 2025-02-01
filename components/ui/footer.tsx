import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-16 container mx-auto py-20 flex text-muted-foreground justify-between items-center">
      <div className="">
        <p className=" font-semibold">
          Created with NextJS and Shadcn/ui, deployed on Vercel.
        </p>
        <p className="text-sm">by Tom Wang</p>
        <div className="flex gap-2 pt-1 items-center ">
          <Link href="https://github.com/zxTomw" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="h-4 hover:text-foreground"
            />
          </Link>
          <Link href="https://linkedin.com/in/zxTomw" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="h-5 hover:text-foreground"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
