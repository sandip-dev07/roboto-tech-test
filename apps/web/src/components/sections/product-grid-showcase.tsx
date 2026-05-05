import { cn } from "@workspace/ui/lib/utils";
import Link from "next/link";

import type { PagebuilderType } from "@/types";
import { SanityImage } from "../elements/sanity-image";

type ProductGridShowcaseProps = PagebuilderType<"productGridShowcase">;
type ProductGridItem = NonNullable<
  NonNullable<ProductGridShowcaseProps["items"]>[number]
>;

const backgroundToneClasses: Record<string, string> = {
  mist: "bg-[#E3E3E3]",
  none: "",
};

type LayoutConfig = {
  sectionHeightClass?: string;
  imageSizeClass: string;
  imageObjectClass?: string;
};

const layoutClasses: Record<string, LayoutConfig> = {
  standardLandscape: {
    imageSizeClass: "aspect-[333/244] w-full lg:h-[244px] lg:w-[333px]",
    imageObjectClass: "object-contain",
  },
  tallPortrait: {
    imageSizeClass: "aspect-[186/253] w-full lg:h-[253px] lg:w-[186px]",
    imageObjectClass: "object-contain",
  },
  storyPortrait: {
    imageSizeClass: "aspect-[196/253] w-full lg:h-[253px] lg:w-[196px]",
    imageObjectClass: "object-contain",
  },
  furniturePortrait: {
    sectionHeightClass: "aspect-[189/253] lg:aspect-[0/0]",
    imageSizeClass: "aspect-[189/253] w-full lg:h-[253px] lg:w-[189px]",
    imageObjectClass: "object-contain",
  },
  furnitureLandscape: {
    sectionHeightClass: "aspect-[189/253] lg:aspect-[0/0]",
    imageSizeClass: "aspect-[233/187] w-full lg:h-[187px] lg:w-[233px]",
    imageObjectClass: "object-contain",
  },
  furnitureSquare: {
    sectionHeightClass: "aspect-[189/253] lg:aspect-[0/0]",
    imageSizeClass: "aspect-square w-full lg:h-[232px] lg:w-[232px]",
    imageObjectClass: "object-contain",
  },
  furnitureWide: {
    sectionHeightClass: "aspect-[189/253] lg:aspect-[0/0]",
    imageSizeClass: "aspect-[232/152] w-full lg:h-[152px] lg:w-[232px]",
    imageObjectClass: "object-contain",
  },
};

function getLayoutConfig(layout?: string): LayoutConfig {
  if (layout && layout in layoutClasses) {
    return layoutClasses[layout]!;
  }

  return layoutClasses.standardLandscape!;
}

function ProductGridCard({ item }: { item: ProductGridItem }) {
  const { title, subtitle, image, href, openInNewTab, layout } = item;
  const layoutConfig = getLayoutConfig(layout);

  const content = (
    <div className="flex h-full w-full flex-col items-center">
      <div
        className={cn(
          "flex w-full items-center justify-center lg:min-h-[253px]",
          layoutConfig.sectionHeightClass
        )}
      >
        <div
          className={cn(
            "relative max-w-full overflow-hidden bg-black",
            layoutConfig.imageSizeClass
          )}
        >
          {image?.id ? (
            <SanityImage
              className={cn("h-full w-full", layoutConfig.imageObjectClass)}
              height={650}
              image={image}
              width={650}
            />
          ) : null}
        </div>
      </div>
      <div className="pt-2 text-center lg:pt-3">
        <h3 className="font-bold text-base leading-[30px] text-color-secondary">
          {title}
        </h3>
        {subtitle ? (
          <p className="text-base text-color-secondary">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );

  if (!href) {
    return <div className="h-full w-full justify-self-center">{content}</div>;
  }

  return (
    <Link
      className="group h-full w-full justify-self-center"
      href={href}
      target={openInNewTab ? "_blank" : "_self"}
    >
      {content}
    </Link>
  );
}

export function ProductGridShowcase({
  heading,
  sectionId,
  items,
  backgroundTone = "mist",
}: ProductGridShowcaseProps) {
  const largeGridColsClass =
    (items?.length ?? 0) >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";

  return (
    <section
      className={cn(
        "py-[20px] pb-[40px]",
        backgroundToneClasses[backgroundTone] ?? backgroundToneClasses.mist
      )}
      id={sectionId || undefined}
    >
      {heading ? (
        <h2 className="pb-[24px] text-center text-[22px] leading-[36px] text-black lg:leading-[48px]">
          {heading}
        </h2>
      ) : null}

      <div
        className={cn(
          "grid max-w-container grid-cols-2 items-stretch justify-items-center gap-x-4 gap-y-5 px-[20px] md:gap-x-5 md:px-[38px] lg:gap-x-8 lg:gap-y-10",
          largeGridColsClass
        )}
      >
        {items?.map((item) =>
          item?._key ? <ProductGridCard item={item} key={item._key} /> : null
        )}
      </div>
    </section>
  );
}
