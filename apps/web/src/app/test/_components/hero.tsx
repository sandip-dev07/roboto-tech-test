import { cn } from "@workspace/ui/lib/utils";
import Image from "next/image";

const IMAGE_URL =
  "https://cdn.sanity.io/images/bvh24m7h/production/e31ab67898a01f48612afd44287f8d6e7ae7cf7d-2210x1256.png";

const links = {
  link1: {
    label: "Fireplaces",
    href: "#",
  },
  link2: {
    label: "Lighting",
    href: "#",
  },
  link3: {
    label: "Furniture",
    href: "#",
  },
  link4: {
    label: "Journal",
    href: "#",
  },
};

export default function Hero({ className }: { className?: string }) {
  const navLinks = Object.values(links);

  return (
    <section className={cn(className)}>
      {/* image section */}
      <div className="w-full relative h-[768px] rounded-none">
        <Image
          src={IMAGE_URL}
          alt=""
          fill
          className="object-cover overflow-hidden rounded-none"
        />
      </div>

      {/* links section */}
      <div className="py-[16px] text-center lg:py-[29px]">
        <div className="flex flex-wrap items-center justify-center gap-x-3 text-center text-[16px] leading-[25px] text-[#9c9c9d]">
          {navLinks.map((link, index) => (
            <div
              key={`${link.label}-${index}`}
              className="flex items-center gap-x-3"
            >
              <a
                href={link.href}
                className="text-center tracking-[0] transition-opacity hover:opacity-70 font-medium"
              >
                {link.label}
              </a>
              {index < navLinks.length - 1 ? (
                <span aria-hidden="true" className="text-[#9C9C9D]">
                  |
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
