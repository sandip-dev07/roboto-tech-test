"use client";

import { env } from "@workspace/env/client";
import Link from "next/link";
import useSWR from "swr";

import type { NavigationData } from "@/types";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { NavbarScreenWidth } from "./navbar-screen-width"; //test

const ICON_STROKE = "#9C9C9D";

const fetcher = async (url: string): Promise<NavigationData> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch navigation data");
  }
  return response.json();
};

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="block size-full"
      fill="none"
      viewBox="0 0 24.9203 26.2456"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10.1404"
        cy="10.1404"
        fill="none"
        r="9.39035"
        stroke={ICON_STROKE}
        strokeWidth="1.5"
      />
      <line
        stroke={ICON_STROKE}
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
      aria-hidden="true"
      className="block size-full"
      fill="none"
      viewBox="0 0 32.2105 22.6667"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        fill="none"
        height="21.1667"
        stroke={ICON_STROKE}
        strokeWidth="1.5"
        width="30.7105"
        x="0.75"
        y="0.75"
      />
      <path
        d="M1.52734 2.16016L16.1071 13.6189L30.6868 2.16016"
        fill="none"
        stroke={ICON_STROKE}
        strokeWidth="1.5"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      className="block size-full"
      fill="none"
      viewBox="0 0 31.0176 22.9737"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        stroke={ICON_STROKE}
        strokeWidth="1.5"
        x1="0"
        x2="31.0175"
        y1="0.75"
        y2="0.75"
      />
      <line
        stroke={ICON_STROKE}
        strokeWidth="1.5"
        x1="0"
        x2="31.0176"
        y1="11.4868"
        y2="11.4868"
      />
      <line
        stroke={ICON_STROKE}
        strokeWidth="1.5"
        x1="0"
        x2="31.0176"
        y1="22.2237"
        y2="22.2237"
      />
    </svg>
  );
}

function NavbarSkeleton() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex h-[80px] w-full items-center justify-between bg-[#f3f0ed] px-5 lg:h-[110px] lg:px-[41px]">
      <div className="h-[35px] w-[88px] animate-pulse bg-stone-300/70 lg:h-[45px] lg:w-[108px]" />
      <div className="flex items-center gap-[18px] lg:gap-[26px]">
        <div className="h-[22px] w-[20px] animate-pulse bg-stone-300/70 lg:h-[26px] lg:w-[24px]" />
        <div className="h-[20px] w-[28px] animate-pulse bg-stone-300/70 lg:h-[23px] lg:w-[32px]" />
        <div className="h-[20px] w-[27px] animate-pulse bg-stone-300/70 lg:h-[23px] lg:w-[31px]" />
      </div>
    </header>
  );
}

function HeaderLink({
  href,
  label,
  className,
  children,
}: {
  href: string;
  label: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <Link aria-label={label} className={className} href={href}>
      {children}
    </Link>
  );
}

export function Navbar({
  navbarData: initialNavbarData,
  settingsData: initialSettingsData,
}: NavigationData) {
  const { data, error, isLoading } = useSWR<NavigationData>(
    "/api/navigation",
    fetcher,
    {
      fallbackData: {
        navbarData: initialNavbarData,
        settingsData: initialSettingsData,
      },
      revalidateOnFocus: false,
      revalidateOnMount: false,
      revalidateOnReconnect: true,
      refreshInterval: 30_000,
      errorRetryCount: 3,
      errorRetryInterval: 5000,
    },
  );

  const navigationData = data || {
    navbarData: initialNavbarData,
    settingsData: initialSettingsData,
  };
  const { navbarData, settingsData } = navigationData;
  const { logo, siteTitle, contactEmail } = settingsData || {};

  if (isLoading && !data && !(initialNavbarData && initialSettingsData)) {
    return <NavbarSkeleton />;
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex h-[80px] w-full items-center justify-between bg-background px-5 lg:h-[110px] lg:px-[41px]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <NavbarScreenWidth />
      </div>
      <div className="h-[35px] lg:h-[45px]">
        {logo ? (
          <Logo
            alt={siteTitle || ""}
            className="block h-full"
            height={45}
            image={logo}
            imageClassName="h-full w-auto rounded-none object-contain dark:invert-0"
            priority
            width={108}
          />
        ) : null}
      </div>

      <div className="flex items-center gap-[18px] lg:gap-[26px]">
        <HeaderLink
          className="h-[22px] w-[20px] lg:h-[26px] lg:w-[24px]"
          href="/blog"
          label="Search"
        >
          <SearchIcon />
        </HeaderLink>

        {contactEmail ? (
          <HeaderLink
            className="h-[20px] w-[28px] lg:h-[23px] lg:w-[32px]"
            href={`mailto:${contactEmail}`}
            label="Email us"
          >
            <MailIcon />
          </HeaderLink>
        ) : null}

        <MobileMenu
          navbarData={navbarData}
          settingsData={settingsData}
          triggerChild={<MenuIcon />}
          triggerClassName="h-[20px] w-[27px] p-0 text-transparent hover:bg-transparent lg:h-[23px] lg:w-[31px]"
        />
      </div>

      {error && env.NODE_ENV === "development" && (
        <div className="absolute right-0 bottom-0 left-0 border-destructive/20 border-b bg-destructive/10 px-4 py-2 text-destructive text-xs">
          Navigation data fetch error: {error.message}
        </div>
      )}
    </header>
  );
}
