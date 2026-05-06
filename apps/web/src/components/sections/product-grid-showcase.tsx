import { cn } from "@workspace/ui/lib/utils";
import Link from "next/link";

import type { PagebuilderType } from "@/types";
import AnimateIn from "../animate-in";
import { SanityImage } from "../elements/sanity-image";

type ProductGridShowcaseProps = PagebuilderType<"productGridShowcase">;
type ProductGridItem = NonNullable<
  NonNullable<ProductGridShowcaseProps["items"]>[number]
>;

type LayoutConfig = {
  sectionHeightClass?: string;
  imageSizeClass?: string;
};

type GridLayoutName =
  | "standardLandscape"
  | "tallPortrait"
  | "storyPortrait"
  | "furniturePortrait"
  | "furnitureLandscape"
  | "furnitureSquare"
  | "furnitureWide";

const backgroundToneClasses: Record<string, string> = {
  mist: "bg-[#E3E3E3]",
  none: "",
};

const layoutClasses: Record<GridLayoutName, LayoutConfig> = {
  standardLandscape: {
    imageSizeClass: "aspect-[333/244] w-full lg:h-[244px] lg:w-[333px]",
  },
  tallPortrait: {
    imageSizeClass: "aspect-[186/253] w-full lg:h-[253px] lg:w-[186px]",
  },
  storyPortrait: {
    imageSizeClass: "aspect-[196/253] w-full lg:h-[253px] lg:w-[196px]",
  },
  furniturePortrait: {
    sectionHeightClass: "aspect-[189/253] lg:aspect-[0/0]",
    imageSizeClass: "aspect-[189/253] w-full lg:h-[253px] lg:w-[189px]",
  },
  furnitureLandscape: {
    sectionHeightClass: "aspect-[189/253] lg:aspect-[0/0]",
    imageSizeClass: "aspect-[233/187] w-full lg:h-[187px] lg:w-[233px]",
  },
  furnitureSquare: {
    sectionHeightClass: "aspect-[189/253] lg:aspect-[0/0]",
    imageSizeClass: "aspect-square w-full lg:h-[232px] lg:w-[232px]",
  },
  furnitureWide: {
    sectionHeightClass: "aspect-[189/253] lg:aspect-[0/0]",
    imageSizeClass: "aspect-[232/152] w-full lg:h-[152px] lg:w-[232px]",
  },
};

const sectionDefaultLayouts: Partial<
  Record<NonNullable<ProductGridShowcaseProps["sectionId"]>, GridLayoutName>
> = {
  "latest-chimneypieces": "standardLandscape",
  "latest-lighting": "tallPortrait",
  stories: "storyPortrait",
};

const sectionIndexedLayouts: Partial<
  Record<NonNullable<ProductGridShowcaseProps["sectionId"]>, GridLayoutName[]>
> = {
  "latest-furniture": [
    "furniturePortrait",
    "furnitureLandscape",
    "furnitureLandscape",
    "furnitureSquare",
    "furnitureWide",
  ],
};

function getLayoutConfig(
  sectionId: ProductGridShowcaseProps["sectionId"],
  index: number,
): LayoutConfig {
  if (sectionId) {
    const indexedLayouts = sectionIndexedLayouts[sectionId];
    if (indexedLayouts?.[index]) {
      return layoutClasses[indexedLayouts[index]] ?? layoutClasses.standardLandscape;
    }

    const sectionLayout = sectionDefaultLayouts[sectionId];
    if (sectionLayout) {
      return layoutClasses[sectionLayout] ?? layoutClasses.standardLandscape;
    }
  }

  return layoutClasses.standardLandscape;
}

function ProductGridCard({
  sectionHeightClass,
  imageSizeClass,
  title,
  subtitle,
  image,
  href,
  openInNewTab,
  index = 0,
}: ProductGridItem & LayoutConfig & { index?: number }) {
  const content = (
    <div className="flex h-full w-full flex-col items-center">
      <div
        className={cn(
          "flex w-full items-center justify-center lg:min-h-[253px]",
          sectionHeightClass,
        )}
      >
        <div
          className={cn(
            imageSizeClass,
            "relative max-w-full overflow-hidden bg-black",
          )}
        >
          {image?.id ? (
            <SanityImage
              className="h-full w-full object-contain"
              height={650}
              image={image}
              width={650}
            />
          ) : null}
        </div>
      </div>
      <div className="pt-2 text-center lg:pt-3">
        <h3 className="text-base font-bold leading-[30px] text-color-secondary">
          {title}
        </h3>
        {subtitle ? (
          <p className="text-base text-color-secondary">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );

  if (href) {
    return (
      <AnimateIn
        className="h-full w-full justify-self-center self-stretch"
        delay={index * 0.04}
        y={18}
      >
        <Link
          className="group flex h-full w-full flex-col items-center"
          href={href}
          rel={openInNewTab ? "noreferrer" : undefined}
          target={openInNewTab ? "_blank" : undefined}
        >
          {content}
        </Link>
      </AnimateIn>
    );
  }

  return (
    <AnimateIn
      className="h-full w-full justify-self-center self-stretch"
      delay={index * 0.04}
      y={18}
    >
      <div className="group flex h-full w-full flex-col items-center">
        {content}
      </div>
    </AnimateIn>
  );
}

export function ProductGridShowcase({
  heading,
  sectionId,
  items,
  backgroundTone = "mist",
}: ProductGridShowcaseProps) {
  const gridItems = items ?? [];
  const largeGridColsClass =
    gridItems.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";

  return (
    <section
      className={cn(
        "py-[20px] pb-[40px]",
        backgroundToneClasses[backgroundTone] ?? backgroundToneClasses.mist,
      )}
      id={sectionId || undefined}
    >
      {heading ? (
        <AnimateIn y={16}>
          <h2 className="pb-[24px] text-center text-[22px] leading-[36px] text-black lg:leading-[48px]">
            {heading}
          </h2>
        </AnimateIn>
      ) : null}

      <div
        className={cn(
          "grid max-w-container grid-cols-2 items-stretch justify-items-center gap-x-4 gap-y-5 px-[20px] md:gap-x-5 md:px-[38px] lg:gap-x-8 lg:gap-y-10",
          largeGridColsClass,
        )}
      >
        {gridItems.map((item, index) => {
          if (!item) {
            return null;
          }

          const layoutConfig = getLayoutConfig(sectionId, index);

          return (
            <ProductGridCard
              key={item._key ?? `${item.title}-${index}`}
              index={index}
              {...item}
              {...layoutConfig}
            />
          );
        })}
      </div>
    </section>
  );
}
