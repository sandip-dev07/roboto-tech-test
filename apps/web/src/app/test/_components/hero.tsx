import { cn } from "@workspace/ui/lib/utils";
import Image from "next/image";
import AnimateIn from "./animate-in";

const IMAGE_URL =
  "https://cdn.sanity.io/images/bvh24m7h/production/e31ab67898a01f48612afd44287f8d6e7ae7cf7d-2210x1256.png";

const links = {
  link1: {
    label: "Fireplaces",
    href: "#",
  },
  link2: {
    label: "Lighting",
    href: "#/",
  },
  link3: {
    label: "Furniture",
    href: "#",
  },
  link4: {
    label: "Journal",
    href: "#",
  },
};

export default function Hero({ className }: { className?: string }) {
  const navLinks = Object.values(links);

  return (
    <section className={cn(className)}>
      {/* image section */}
      <AnimateIn y={20}>
        <div className="relative aspect-[2300/1256] w-full rounded-none lg:h-[768px] lg:aspect-auto">
          <Image
            src={IMAGE_URL}
            alt=""
            fill
            className="overflow-hidden rounded-none object-cover"
          />
        </div>
      </AnimateIn>

      {/* links section */}
      <AnimateIn
        delay={0.08}
        y={12}
        className="px-4 py-[18px] text-center sm:px-6 lg:px-0 lg:py-[32px]"
      >
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[14px] leading-[22px] text-color-link sm:text-[15px] sm:leading-[24px] lg:text-[16px] lg:leading-[25px]">
          {navLinks.map((link, index) => (
            <div
              key={`${link.label}-${index}`}
              className="flex items-center gap-x-2 whitespace-nowrap"
            >
              <a
                href={link.href}
                className="text-center font-medium tracking-[0] transition-opacity"
              >
                {link.label}
              </a>
              {index < navLinks.length - 1 ? (
                <span aria-hidden="true" className="text-color-link">
                  |
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </AnimateIn>
    </section>
  );
}
