import { cn } from "@workspace/ui/lib/utils";
import Image from "next/image";
import React from "react";

interface ProductTextImageProps {
  title: string | React.ReactNode;
  description: string;
  buttons?: ReadonlyArray<{ text: string; onClick?: () => void }>;
  imageSrc: string;
  imageSizeClass?: string;
  imageAlt: string;
  label?: string;
}

export default function ProductTextImage({
  title,
  description,
  buttons,
  imageSrc,
  imageSizeClass = "h-[350px] w-[583px] lg:h-[731px]",
  imageAlt,
  label,
}: ProductTextImageProps) {
  return (
    <section className="max-w-[1243px] mx-auto py-[38px] relative">
      <div className="flex items-center justify-between w-full">
        {/* Text Content */}
        <div className="flex flex-col max-w-[509px] mb-14">
          {label && (
            <p className="mb-[12px] font-serif text-center text-[14px] md:text-[13px] leading-[22px] text-black lg:mb-[18px] lg:leading-[25px] uppercase">
              {label}
            </p>
          )}

          <h2 className="mb-[16px] font-serif text-center text-[24px] leading-[36px] text-black lg:mb-[26px] lg:text-[34px] lg:leading-[48px]">
            {title}
          </h2>

          <p className="mb-[24px] font-serif text-sm leading-[22px] text-black lg:mb-[36px] lg:text-base lg:leading-[25px]">
            {description}
          </p>

          {buttons && buttons.length > 0 && (
            <div className="flex flex-col gap-[11px] items-center mt-auto">
              {buttons.map((button, index) => (
                <button
                  key={`${button.text}-${index}`}
                  onClick={button.onClick}
                  className="flex h-[33px] w-full items-center justify-center border border-color-secondary px-[24px] font-serif text-[14px] leading-[25px] text-color-secondary transition-colors hover:bg-[#969696] hover:text-white lg:w-auto lg:text-[16px]"
                >
                  {button.text}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Image */}
        <div>
          <div className={cn(imageSizeClass, "relative")}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
