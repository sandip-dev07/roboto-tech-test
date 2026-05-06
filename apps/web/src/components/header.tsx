import { sanityFetch } from "@workspace/sanity/live";
import { queryGlobalSeoSettings } from "@workspace/sanity/query";
import type { ReactNode } from "react";

import { Logo } from "./logo";

const HEADER_ACTION_BUTTON_CLASSNAME =
  "flex h-10 w-10 items-center justify-center md:h-11 md:w-11 lg:h-auto lg:w-auto";

type HeaderActionButtonProps = {
  ariaLabel: string;
  children: ReactNode;
};

function HeaderActionButton({
  ariaLabel,
  children,
}: HeaderActionButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      className={HEADER_ACTION_BUTTON_CLASSNAME}
      type="button"
    >
      {children}
    </button>
  );
}

function SearchIcon() {
  return (
    <svg
      className="block h-[22px] w-[20px] md:h-[24px] md:w-[22px] lg:h-[26px] lg:w-[24px]"
      fill="none"
      viewBox="0 0 24.9203 26.2456"
    >
      <circle
        cx="10.1404"
        cy="10.1404"
        r="9.39035"
        fill="none"
        stroke="#9C9C9D"
        strokeWidth="1.5"
      />
      <line
        stroke="#9C9C9D"
        strokeWidth="1.5"
        x1="16.0391"
        x2="24.39"
        y1="17.3644"
        y2="25.7153"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="block h-[20px] w-[28px] md:h-[21px] md:w-[30px] lg:h-[23px] lg:w-[32px]"
      fill="none"
      viewBox="0 0 33 23"
    >
      <rect
        fill="none"
        height="21.1667"
        stroke="#9C9C9D"
        strokeWidth="1.5"
        width="30.7105"
        x="0.75"
        y="0.75"
      />
      <path
        d="M0.450012 0.619629L12.3798 9.567L25.5026 0.619629"
        fill="none"
        stroke="#9C9C9D"
        strokeWidth="1.5"
        transform="translate(3.12893 4.1523)"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      className="block h-[20px] w-[27px] md:h-[21px] md:w-[29px] lg:h-[23px] lg:w-[31px]"
      fill="none"
      viewBox="0 0 31.0176 22.9737"
    >
      <line
        stroke="#9C9C9D"
        strokeWidth="1.5"
        x2="31.0175"
        y1="0.75"
        y2="0.75"
      />
      <line
        stroke="#9C9C9D"
        strokeWidth="1.5"
        x2="31.0176"
        y1="11.4868"
        y2="11.4868"
      />
      <line
        stroke="#9C9C9D"
        strokeWidth="1.5"
        x2="31.0176"
        y1="22.2237"
        y2="22.2237"
      />
    </svg>
  );
}

export default async function Header() {
  const { data: settingsData } = await sanityFetch({
    query: queryGlobalSeoSettings,
  });

  const logo = settingsData?.logo;
  const siteTitle = settingsData?.siteTitle ?? "Logo";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-[80px] w-full items-center bg-background md:h-[92px] lg:h-[110px]">
      <nav className="max-w-container mx-auto flex w-full items-center justify-between gap-4">
        <div className="relative shrink-0 h-[32px] w-[77px] lg:h-[45px] lg:w-[108px]">
          {logo ? (
            <Logo
              alt={siteTitle}
              className="block h-full w-full"
              height={45}
              image={logo}
              imageClassName="h-full w-full rounded-none object-contain"
              priority
              width={108}
            />
          ) : null}
        </div>

        <div className="flex shrink-0 items-center gap-[8px] sm:gap-[10px] md:gap-[14px] lg:gap-[26px]">
          <HeaderActionButton ariaLabel="Search">
            <SearchIcon />
          </HeaderActionButton>
          <HeaderActionButton ariaLabel="Mail">
            <MailIcon />
          </HeaderActionButton>
          <HeaderActionButton ariaLabel="Menu">
            <MenuIcon />
          </HeaderActionButton>
        </div>
      </nav>
    </header>
  );
}
