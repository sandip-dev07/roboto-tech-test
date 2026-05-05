import AnimateIn from "@/app/sanity/_components/animate-in";
import { cn } from "@workspace/ui/lib/utils";
import Link from "next/link";

import type { PagebuilderType } from "@/types";
import { SanityImage } from "../elements/sanity-image";

type ProductShowcaseProps = PagebuilderType<"productShowcase">;

const sectionToneClasses: Record<string, string> = {
  none: "",
  sand: "bg-[#DFDAD7]",
};

const sectionSpacingClasses: Record<string, string> = {
  compact: "py-[86px]",
  default: "py-[86px]",
  large: "py-[120px]",
  xl: "py-[176px]",
};

const imageLayoutClasses: Record<string, string> = {
  portrait: "lg:h-[731px] lg:w-[583px]",
  furniture: "lg:h-[731px] lg:w-[583px]",
  collection: "lg:h-[560px] lg:w-[410px]",
  journal: "lg:mr-[86px] lg:h-[560px] lg:w-[410px]",
};

export function ProductShowcase({
  eyebrow,
  title,
  sectionId,
  description,
  buttons,
  image,
  imageLayout = "portrait",
  backgroundTone = "none",
  spacing = "default",
}: ProductShowcaseProps) {
  return (
    <section
      className={cn(
        sectionToneClasses[backgroundTone] ?? sectionToneClasses.none,
        sectionSpacingClasses[spacing] ?? sectionSpacingClasses.default,
      )}
      id={sectionId || undefined}
    >
      <div className="relative mx-auto max-w-[1243px] px-5 py-[32px] sm:px-6 md:px-9 md:py-[38px] lg:px-0">
        <div className="flex w-full flex-col-reverse items-center gap-8 md:gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <AnimateIn y={18} className="flex w-full max-w-[509px] flex-col lg:mb-14">
            {eyebrow ? (
              <p className="mb-[10px] text-center font-serif text-[12px] leading-[20px] text-black uppercase sm:text-[13px] sm:leading-[22px] lg:mb-[18px] lg:text-[14px] lg:leading-[25px]">
                {eyebrow}
              </p>
            ) : null}

            {title ? (
              <h2 className="mb-[14px] whitespace-pre-line text-center font-serif text-[22px] leading-[30px] text-black sm:text-[26px] sm:leading-[36px] lg:mb-[26px] lg:text-[34px] lg:leading-[48px]">
                {title}
              </h2>
            ) : null}

            {description ? (
              <p className="mb-[20px] text-center font-serif text-[14px] leading-[22px] text-black sm:text-[15px] sm:leading-[24px] lg:mb-[36px] lg:text-left lg:text-base lg:leading-[25px]">
                {description}
              </p>
            ) : null}

            {buttons && buttons.length > 0 ? (
              <div className="mt-auto flex flex-col items-center gap-[11px] lg:items-center">
                {buttons.map((button, index) =>
                  button?.href ? (
                    <Link
                      key={button._key ?? `${button.text}-${index}`}
                      href={button.href}
                      target={button.openInNewTab ? "_blank" : undefined}
                      rel={button.openInNewTab ? "noreferrer" : undefined}
                      className="flex min-h-[40px] w-full items-center justify-center border border-color-secondary px-[20px] py-2 text-center font-serif text-[14px] leading-[22px] text-color-secondary transition-colors hover:bg-[#969696] hover:text-white sm:max-w-[360px] lg:min-h-[33px] lg:w-auto lg:px-[24px] lg:py-0 lg:text-[16px] lg:leading-[25px]"
                    >
                      {button.text}
                    </Link>
                  ) : (
                    <button
                      key={button._key ?? `${button.text}-${index}`}
                      className="flex min-h-[40px] w-full items-center justify-center border border-color-secondary px-[20px] py-2 text-center font-serif text-[14px] leading-[22px] text-color-secondary transition-colors hover:bg-[#969696] hover:text-white sm:max-w-[360px] lg:min-h-[33px] lg:w-auto lg:px-[24px] lg:py-0 lg:text-[16px] lg:leading-[25px]"
                      disabled
                      type="button"
                    >
                      {button.text}
                    </button>
                  ),
                )}
              </div>
            ) : null}
          </AnimateIn>

          {image?.id ? (
            <AnimateIn delay={0.06} y={24} className="w-full lg:w-auto">
              <div
                className={cn(
                  "relative mx-auto aspect-[906/1134] w-full max-w-[360px] sm:max-w-[460px] md:max-w-[520px] lg:mx-0 lg:max-w-none",
                  imageLayoutClasses[imageLayout] ?? imageLayoutClasses.portrait,
                )}
              >
                <SanityImage
                  className="h-full w-full object-cover"
                  height={1134}
                  image={image}
                  width={906}
                />
              </div>
            </AnimateIn>
          ) : null}
        </div>
      </div>
    </section>
  );
}
