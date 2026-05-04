import Image from "next/image";

interface ProductTextImageProps {
  title: string;
  description: string;
  buttons?: ReadonlyArray<{ text: string; onClick?: () => void }>;
  imageSrc: string;
  imageAlt: string;
  label?: string;
}

export default function ProductTextImage({
  title,
  description,
  buttons,
  imageSrc,
  imageAlt,
  label,
}: ProductTextImageProps) {
  return (
    <section className="max-w-[1243px] mx-auto py-[40px] relative">
      <div className="flex items-center justify-between w-full">
        {/* Text Content */}
        <div className="flex flex-col max-w-[509px]">
          {label && (
            <p className="mb-[12px] font-serif text-center text-[14px] leading-[22px] text-black lg:mb-[21px] lg:text-[16px] lg:leading-[25px]">
              {label}
            </p>
          )}

          <h2 className="mb-[16px] font-serif text-center text-[24px] leading-[36px] text-black lg:mb-[26px] lg:text-[34px] lg:leading-[48px]">
            {title}
          </h2>

          <p className="mb-[24px] font-serif text-sm leading-[22px] text-black lg:mb-[32px] lg:text-base lg:leading-[25px]">
            {description}
          </p>

          {buttons && buttons.length > 0 && (
            <div className="flex flex-col gap-[11px] items-center mt-auto">
              {buttons.map((button, index) => (
                <button
                  key={`${button.text}-${index}`}
                  onClick={button.onClick}
                  className="flex h-[33px] w-full items-center justify-center border border-[#737373] px-[24px] font-serif text-[14px] leading-[25px] text-[#737373] transition-colors hover:bg-[#969696] hover:text-white lg:w-auto lg:text-[16px]"
                >
                  {button.text}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Image */}
        <div>
          <div className="relative h-[350px] w-[583px] lg:h-[731px]">
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
