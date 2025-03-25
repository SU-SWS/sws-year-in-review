import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { cnb } from "cnbuilder";
import Link from "next/link";
import { HtmlHTMLAttributes } from "react";

type Props = HtmlHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  hasUnderline?: boolean;
};

export const ActionLink = ({
  children,
  className,
  hasUnderline = false,
  ...props
}: Props) => {
  return (
    <Link
      {...props}
      className={cnb(
        "group/action transition ease-in-out duration-1000 cursor-pointer font-inherit text-white hocus:text-white",
        { "underline underline-offset-[5px] decoration-teal decoration-4 hocus:decoration-illuminating": hasUnderline },
        { " no-underline hocus:underline": !hasUnderline },
        className,
      )}
    >
      {children}
      <span className="whitespace-nowrap">
        &#65279;
        <ChevronRightIcon
          width={30}
          className="transition ease-in-out duration-1000 ml-01em group-hover/action:translate-x-02em group-focus/action:translate-x-02em inline text-teal group-hover/action:text-illuminating group-focus/action:text-illuminating"
        />
      </span>
    </Link>
  );
};
