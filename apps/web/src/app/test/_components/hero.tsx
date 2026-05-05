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
    href: "#/",
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
      <div className="py-[16px] text-center lg:py-[32px]">
        <div className="flex flex-wrap items-center justify-center gap-x-2 text-center text-[16px] leading-[25px] text-color-link">
          {navLinks.map((link, index) => (
            <div
              key={`${link.label}-${index}`}
              className="flex items-center gap-x-2"
            >
              <a
                href={link.href}
                className="text-center tracking-[0] transition-opacity font-medium"
              >
                {link.label}
              </a>
              {index < navLinks.length - 1 ? (
                <span aria-hidden="true" className="text-color-link">
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
