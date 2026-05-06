import AnimateIn from "@/components/animate-in";
import type { PagebuilderType } from "@/types";
import Image from "next/image";
import Link from "next/link";

type HeroBlockProps = PagebuilderType<"hero">;

const IMAGE_URL =
  "https://cdn.sanity.io/images/bvh24m7h/production/e31ab67898a01f48612afd44287f8d6e7ae7cf7d-2210x1256.png";

export default function HeroBlock({ buttons, image }: HeroBlockProps) {
  const navLinks = buttons ?? [];

  return (
    <section className="max-w-container">
      {/* image section */}
      <AnimateIn y={20}>
        <div className="relative aspect-square w-full rounded-none lg:h-[768px] lg:aspect-auto">
          <Image
            src={IMAGE_URL}
            alt={image?.alt || ""}
            fill
            className="overflow-hidden rounded-none object-cover"
          />
        </div>
      </AnimateIn>

      {/* links section */}
      <AnimateIn
        delay={0.08}
        y={12}
        className="px-4 py-[18px] text-center sm:px-6 lg:px-0 lg:py-[31px]"
      >
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[14px] leading-[22px] text-color-link sm:text-[15px] sm:leading-[24px] lg:text-[16px] lg:leading-[25px]">
          {navLinks.map((link, index) => (
            <div
              key={`${link._key ?? link.text ?? "hero-link"}-${index}`}
              className="flex items-center gap-x-2 whitespace-nowrap"
            >
              <Link
                href={link.href || "#"}
                className="text-center font-medium tracking-[0] transition-opacity"
                target={link.openInNewTab ? "_blank" : undefined}
                rel={link.openInNewTab ? "noreferrer" : undefined}
              >
                {link.text}
              </Link>
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
