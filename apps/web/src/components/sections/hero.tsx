import Link from "next/link";

import type { PagebuilderType } from "@/types";
import { RichText } from "../elements/rich-text";
import { SanityImage } from "../elements/sanity-image";

type HeroBlockProps = PagebuilderType<"hero">;
type HeroLink = NonNullable<NonNullable<HeroBlockProps["buttons"]>[number]> & {
  href: string;
};

function getHeroLinks(buttons: HeroBlockProps["buttons"]): HeroLink[] {
  return buttons?.filter((button): button is HeroLink => Boolean(button?.href)) ?? [];
}

function HeroAccessibleContent({
  badge,
  title,
  richText,
}: Pick<HeroBlockProps, "badge" | "title" | "richText">) {
  if (!(badge || title || richText)) {
    return null;
  }

  return (
    <div className="sr-only">
      {badge ? <p>{badge}</p> : null}
      {title ? <h1>{title}</h1> : null}
      <RichText richText={richText} />
    </div>
  );
}

function HeroMedia({ image }: Pick<HeroBlockProps, "image">) {
  if (!image) {
    return null;
  }

  return (
    <div className="relative overflow-hidden bg-[#d8d8d3]">
      <SanityImage
        className="h-[52vw] min-h-[22rem] w-full rounded-none object-cover md:h-[50vw] md:max-h-[38.5rem] lg:h-[51.5rem]"
        fetchPriority="high"
        height={1200}
        image={image}
        loading="eager"
        width={2000}
      />
    </div>
  );
}

function HeroLinkRow({ links }: { links: HeroLink[] }) {
  if (!links.length) {
    return null;
  }

  return (
    <nav
      aria-label="Hero categories"
      className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 px-4 pt-6 text-center font-light text-[#9f9f9f] text-sm sm:text-base"
    >
      {links.map((button, index) => (
        <span className="inline-flex items-center" key={button._key}>
          <Link
            className="transition-colors hover:text-[#1d1d1b]"
            href={button.href}
            target={button.openInNewTab ? "_blank" : "_self"}
          >
            {button.text}
          </Link>
          {index < links.length - 1 ? (
            <span aria-hidden="true" className="ml-2 text-[#b8b3ab]">
              |
            </span>
          ) : null}
        </span>
      ))}
    </nav>
  );
}

export function HeroBlock({
  title,
  buttons,
  badge,
  image,
  richText,
}: HeroBlockProps) {
  const heroLinks = getHeroLinks(buttons);

  return (
    <section className="px-4 pt-3 pb-6 md:px-6 md:pt-4 md:pb-8" id="hero">
      <div className="mx-auto max-w-screen-2xl">
        <HeroAccessibleContent badge={badge} richText={richText} title={title} />
        <HeroMedia image={image} />
        <HeroLinkRow links={heroLinks} />
      </div>
    </section>
  );
}
