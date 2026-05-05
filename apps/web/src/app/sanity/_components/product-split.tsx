import { cn } from "@workspace/ui/lib/utils";
import Image from "next/image";
import React from "react";
import AnimateIn from "./animate-in";

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
  imageSizeClass = "aspect-[906/1134] w-full lg:h-[731px] lg:w-[583px]",
  imageAlt,
  label,
}: ProductTextImageProps) {
  return (
    <section className="relative mx-auto max-w-[1243px] px-5 py-[32px] sm:px-6 md:px-9 md:py-[38px] lg:px-0">
      <div className="flex w-full flex-col-reverse items-center gap-8 md:gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        {/* Text Content */}
        <AnimateIn y={18} className="flex w-full max-w-[509px] flex-col lg:mb-14">
          {label && (
            <p className="mb-[10px] text-center font-serif text-[12px] leading-[20px] text-black uppercase sm:text-[13px] sm:leading-[22px] lg:mb-[18px] lg:text-[14px] lg:leading-[25px]">
              {label}
            </p>
          )}

          <h2 className="mb-[14px] text-center font-serif text-[22px] leading-[30px] text-black sm:text-[26px] sm:leading-[36px] lg:mb-[26px] lg:text-[34px] lg:leading-[48px]">
            {title}
          </h2>

          <p className="mb-[20px] text-center font-serif text-[14px] leading-[22px] text-black sm:text-[15px] sm:leading-[24px] lg:mb-[36px] lg:text-left lg:text-base lg:leading-[25px]">
            {description}
          </p>

          {buttons && buttons.length > 0 && (
            <div className="mt-auto flex flex-col items-center gap-[11px] lg:items-center">
              {buttons.map((button, index) => (
                <button
                  key={`${button.text}-${index}`}
                  onClick={button.onClick}
                  className="flex min-h-[40px] w-full items-center justify-center border border-color-secondary px-[20px] py-2 text-center font-serif text-[14px] leading-[22px] text-color-secondary transition-colors hover:bg-[#969696] hover:text-white sm:max-w-[360px] lg:min-h-[33px] lg:w-auto lg:px-[24px] lg:py-0 lg:text-[16px] lg:leading-[25px]"
                >
                  {button.text}
                </button>
              ))}
            </div>
          )}
        </AnimateIn>

        {/* Image */}
        <AnimateIn delay={0.06} y={24} className="w-full lg:w-auto">
          <div
            className={cn(
              "relative mx-auto w-full max-w-[360px] sm:max-w-[460px] md:max-w-[520px] lg:mx-0 lg:max-w-none",
              imageSizeClass,
            )}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
