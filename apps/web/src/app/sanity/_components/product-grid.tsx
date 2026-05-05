import { cn } from "@workspace/ui/lib/utils";
import Image from "next/image";
import AnimateIn from "./animate-in";

export type ProductGridItem = {
  sectionHeightClass?: string;
  imageSizeClass?: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
};

type ProductGridProps = {
  heading: string;
  items: readonly ProductGridItem[];
};

function ProductGridCard({
  sectionHeightClass,
  imageSizeClass,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  href,
  index = 0,
}: ProductGridItem & { index?: number }) {
  const content = (
    <div className="flex w-full h-full flex-col items-center">
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
          <Image
            alt={imageAlt}
            className="object-contain"
            fill
            sizes="(min-width: 1280px) 23vw, (min-width: 768px) 45vw, 100vw"
            src={imageSrc}
          />
        </div>
      </div>
      <div className="pt-2 lg:pt-3 text-center">
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
        delay={index * 0.04}
        y={18}
        className="h-full w-full justify-self-center self-stretch"
      >
        <a
          className="group flex h-full w-full flex-col items-center"
          href={href}
        >
          {content}
        </a>
      </AnimateIn>
    );
  }

  return (
    <AnimateIn
      delay={index * 0.04}
      y={18}
      className="h-full w-full justify-self-center self-stretch"
    >
      <div className="group flex h-full w-full flex-col items-center">
        {content}
      </div>
    </AnimateIn>
  );
}

export default function ProductGrid({ heading, items }: ProductGridProps) {
  const largeGridColsClass =
    items.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";

  return (
    <section className="bg-[#E3E3E3] py-[20px] pb-[40px]">
      <AnimateIn y={16}>
        <h2 className="pb-[24px] text-center text-[22px] leading-[36px] text-black lg:leading-[48px]">
          {heading}
        </h2>
      </AnimateIn>

      <div
        className={cn(
          "grid max-w-container grid-cols-2 justify-items-center items-stretch gap-x-4 gap-y-5 px-[20px] md:gap-x-5 md:px-[38px] lg:gap-x-8 lg:gap-y-10",
          largeGridColsClass,
        )}
      >
        {items.map((item, index) => (
          <ProductGridCard
            key={`${item.title}-${item.imageSrc}-${index}`}
            index={index}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}
