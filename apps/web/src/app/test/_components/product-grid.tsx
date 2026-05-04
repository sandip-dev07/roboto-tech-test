import { cn } from "@workspace/ui/lib/utils";
import Image from "next/image";

export type ProductGridItem = {
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
  imageSizeClass,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  href,
}: ProductGridItem) {
  const content = (
    <>
      <div className={cn(imageSizeClass, "relative overflow-hidden bg-black")}>
        <Image
          alt={imageAlt}
          className="object-contain"
          fill
          sizes="(min-width: 1280px) 23vw, (min-width: 768px) 45vw, 100vw"
          src={imageSrc}
        />
      </div>
      <div className="pt-3 text-center">
        <h3 className="text-base leading-[30px] text-[#7f7f80]">{title}</h3>
        {subtitle ? (
          <p className="text-base text-[#7f7f80]">{subtitle}</p>
        ) : null}
      </div>
    </>
  );

  if (href) {
    return (
      <a className="group block w-full max-w-fit justify-self-center" href={href}>
        {content}
      </a>
    );
  }

  return <div className="group w-full max-w-fit justify-self-center">{content}</div>;
}

export default function ProductGrid({ heading, items }: ProductGridProps) {
  const largeGridColsClass =
    items.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";

  return (
    <section className="py-[30px] bg-[#E3E3E3]">
      <h2 className=" text-center pb-[30px] text-[22px] leading-[36px] text-black lg:leading-[48px]">
        {heading}
      </h2>

      <div
        className={cn(
          "grid max-w-container grid-cols-1 justify-items-center items-center gap-y-8 px-[20px] sm:grid-cols-2 sm:gap-x-5 md:px-[38px] lg:gap-x-8 lg:gap-y-10",
          largeGridColsClass,
        )}
      >
        {items.map((item, index) => (
          <ProductGridCard
            key={`${item.title}-${item.imageSrc}-${index}`}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}
