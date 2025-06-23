import { HtmlHTMLAttributes } from "react";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { LinkProps } from "next/dist/client/link";
import { cnb } from "cnbuilder";

type Props = HtmlHTMLAttributes<HTMLAnchorElement | HTMLButtonElement> &
  LinkProps & {
    href: string;
    linkType?:
      | "timeline"
      | "story"
      | "story-invert"
      | "poster"
      | "poster-invert"
      | "heading"
      | "default";
  };

const NextLink = ({ href, children, className, linkType, ...props }: Props) => {
  const linkStyles =
    "transition-all ease-in-out duration-1000 underline text-white hocus:text-teal hocus:decoration-teal cursor-pointer decoration-4 font-inherit";

  return (
    <Link {...props} href={href} className={cnb(linkStyles, className)}>
      {children}
      {href.startsWith("mailto") && (
        <span className="whitespace-nowrap">
          &#65279;
          <EnvelopeIcon width={20} className="ml-4 inline-block" />
        </span>
      )}
    </Link>
  );
};

export { NextLink as Link };
