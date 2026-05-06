import { cn } from "@workspace/ui/lib/utils";
import Link from "next/link";

import type { PagebuilderType } from "@/types";
import AnimateIn from "../animate-in";
import { SanityImage } from "../elements/sanity-image";

type ProductShowcaseProps = PagebuilderType<"productShowcase">;
type ProductShowcaseButton = NonNullable<
  NonNullable<ProductShowcaseProps["buttons"]>[number]
>;
type ProductShowcaseSectionId = NonNullable<ProductShowcaseProps["sectionId"]>;
type ProductShowcaseBackgroundTone = NonNullable<
  ProductShowcaseProps["backgroundTone"]
>;

const DEFAULT_SECTION_SPACING_CLASS = "py-[86px]";
const DEFAULT_IMAGE_LAYOUT_CLASS =
  "aspect-[906/1134] w-full overflow-hidden lg:h-[731px] lg:w-[583px]";
const buttonClassName =
  "flex min-h-[40px] w-full items-center justify-center border border-color-secondary px-[20px] py-2 text-center font-serif text-[14px] leading-[22px] text-color-secondary transition-colors hover:bg-[#969696] hover:text-white sm:max-w-[360px] lg:min-h-[33px] lg:w-auto lg:px-[24px] lg:py-0 lg:text-[16px] lg:leading-[25px]";

const sectionToneClasses: Record<ProductShowcaseBackgroundTone, string> = {
  none: "",
  sand: "bg-[#DFDAD7]",
};

const sectionSpacingClasses: Partial<Record<ProductShowcaseSectionId, string>> =
  {
    fireplaces: "",
    lighting: "pb-[86px]",
    furniture: "py-[86px]",
    "grand-collection": "py-[86px]",
    journal: "py-[176px]",
  };

const imageLayoutClasses: Partial<Record<ProductShowcaseSectionId, string>> = {
  fireplaces: DEFAULT_IMAGE_LAYOUT_CLASS,
  lighting: DEFAULT_IMAGE_LAYOUT_CLASS,
  furniture: DEFAULT_IMAGE_LAYOUT_CLASS,
  "grand-collection": DEFAULT_IMAGE_LAYOUT_CLASS,
  journal: "aspect-[906/1134] w-full lg:mr-[86px] lg:h-[560px] lg:w-[410px]",
};

function getSectionSpacingClass(sectionId?: ProductShowcaseProps["sectionId"]) {
  return sectionId
    ? sectionSpacingClasses[sectionId] ?? DEFAULT_SECTION_SPACING_CLASS
    : DEFAULT_SECTION_SPACING_CLASS;
}

function getImageLayoutClass(sectionId?: ProductShowcaseProps["sectionId"]) {
  return sectionId
    ? imageLayoutClasses[sectionId] ?? DEFAULT_IMAGE_LAYOUT_CLASS
    : DEFAULT_IMAGE_LAYOUT_CLASS;
}

function ProductShowcaseButtonItem({
  button,
  index,
}: {
  button: ProductShowcaseButton;
  index: number;
}) {
  const key = button._key ?? `${button.text}-${index}`;

  if (button.href) {
    return (
      <Link
        className={buttonClassName}
        href={button.href}
        key={key}
        rel={button.openInNewTab ? "noreferrer" : undefined}
        target={button.openInNewTab ? "_blank" : undefined}
      >
        {button.text}
      </Link>
    );
  }

  return (
    <button className={buttonClassName} disabled key={key} type="button">
      {button.text}
    </button>
  );
}

export function ProductShowcase({
  eyebrow,
  title,
  sectionId,
  description,
  buttons,
  image,
  backgroundTone = "none",
}: ProductShowcaseProps) {
  return (
    <section
      className={cn(
        sectionToneClasses[backgroundTone] ?? sectionToneClasses.none,
        getSectionSpacingClass(sectionId),
      )}
      id={sectionId || undefined}
    >
      <div className="relative mx-auto max-w-[1243px] px-5 py-[32px] sm:px-6 md:px-9 md:py-[38px] lg:px-0">
        <div className="flex w-full flex-col-reverse items-center gap-8 md:gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <AnimateIn
            className="flex w-full max-w-[509px] flex-col lg:mb-14"
            y={18}
          >
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
                  button ? (
                    <ProductShowcaseButtonItem
                      button={button}
                      index={index}
                      key={button._key ?? `${button.text}-${index}`}
                    />
                  ) : null,
                )}
              </div>
            ) : null}
          </AnimateIn>

          {image?.id ? (
            <AnimateIn className="w-full lg:w-auto" delay={0.06} y={24}>
              <div className={getImageLayoutClass(sectionId)}>
                <SanityImage className="h-full w-fit object-cover" image={image} />
              </div>
            </AnimateIn>
          ) : null}
        </div>
      </div>
    </section>
  );
}
