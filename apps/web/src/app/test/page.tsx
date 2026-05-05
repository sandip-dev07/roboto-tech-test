import Hero from "./_components/hero";
import AnimateIn from "./_components/animate-in";
import ProductGrid from "./_components/product-grid";
import type { ProductGridItem } from "./_components/product-grid";
import ProductTextImage from "./_components/product-split";

const IMAGE_URL =
  "https://cdn.sanity.io/images/bvh24m7h/production/2af57bcb9ec61e2265710f088d8522bf5c8e0970-906x1134.png";

const CHIMNEY_IMAGE =
  "https://cdn.sanity.io/images/bvh24m7h/production/f4dbabd3e0efc6eee8e802494737e96ae9d821ee-1500x1099.jpg";

const LIGHTING_IMAGE =
  "https://cdn.sanity.io/images/bvh24m7h/production/248e8db45e63e57766b13c1c8ebb7f462ac58def-2008x2731.jpg";

const STORY_IMAGE =
  "https://cdn.sanity.io/images/bvh24m7h/production/c31da3ca256f42ff1a3310ca8d64b69b8d62df9b-2656x3984.jpg";

const FURNITURE_IMAGE =
  "https://cdn.sanity.io/images/bvh24m7h/production/bcf8051eff53ee417aca8185dfa5c801953049e3-904x1130.png";

const GRAND_COLLECTION_IMAGE =
  "https://cdn.sanity.io/images/bvh24m7h/production/9b24ee522a0e4f63fc04b0f8bc7e05b5e4f06d41-1038x1384.png";

const JOURNAL_IMAGE =
  "https://cdn.sanity.io/images/bvh24m7h/production/083156480a1783c8baceb9c996e2e60e4e0b49d4-820x1120.png";

const DEFAULT_DESCRIPTION =
  "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam.";

const chimneyGridItems = [
  {
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
    imageSizeClass: "aspect-[333/244] w-full lg:h-[244px] lg:w-[333px]",
    imageSrc: CHIMNEY_IMAGE,
    imageAlt: "Chimneypiece one",
    href: "#",
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
    imageSizeClass: "aspect-[333/244] w-full lg:h-[244px] lg:w-[333px]",
    imageSrc: CHIMNEY_IMAGE,
    imageAlt: "Chimneypiece two",
    href: "#",
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
    imageSizeClass: "aspect-[333/244] w-full lg:h-[244px] lg:w-[333px]",
    imageSrc: CHIMNEY_IMAGE,
    imageAlt: "Chimneypiece three",
    href: "#",
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
    imageSizeClass: "aspect-[333/244] w-full lg:h-[244px] lg:w-[333px]",
    imageSrc: CHIMNEY_IMAGE,
    imageAlt: "Chimneypiece four",
    href: "#",
  },
] as const satisfies readonly ProductGridItem[];

const lightingGridItems = [
  {
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
    imageSizeClass: "aspect-[186/253] w-full lg:h-[253px] lg:w-[186px]",
    imageSrc: LIGHTING_IMAGE,
    imageAlt: "Lighting one",
    href: "#",
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
    imageSizeClass: "aspect-[186/253] w-full lg:h-[253px] lg:w-[186px]",
    imageSrc: LIGHTING_IMAGE,
    imageAlt: "Lighting two",
    href: "#",
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
    imageSizeClass: "aspect-[186/253] w-full lg:h-[253px] lg:w-[186px]",
    imageSrc: LIGHTING_IMAGE,
    imageAlt: "Lighting three",
    href: "#",
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
    imageSizeClass: "aspect-[186/253] w-full lg:h-[253px] lg:w-[186px]",
    imageSrc: LIGHTING_IMAGE,
    imageAlt: "Lighting four",
    href: "#",
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
    imageSizeClass: "aspect-[186/253] w-full lg:h-[253px] lg:w-[186px]",
    imageSrc: LIGHTING_IMAGE,
    imageAlt: "Lighting five",
    href: "#",
  },
] as const satisfies readonly ProductGridItem[];

const furnitureGridItems = [
  {
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
    sectionHeightClass: "aspect-[189/253]",
    imageSizeClass: "aspect-[189/253] w-full lg:h-[253px] lg:w-[189px]",
    imageSrc:
      "https://cdn.sanity.io/images/bvh24m7h/production/47fa10d664c2aa722914388aab23495e6f32ed19-486x654.png",
    imageAlt: "Furniture one",
    href: "#",
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
    sectionHeightClass: "aspect-[189/253]",
    imageSizeClass: "aspect-[233/187] w-full lg:h-[187px] lg:w-[233px]",
    imageSrc:
      "https://cdn.sanity.io/images/bvh24m7h/production/cf2ffcbc500e904ce39b471d521c5c30a8a25052-486x390.png",
    imageAlt: "Furniture two",
    href: "#",
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
    sectionHeightClass: "aspect-[189/253]",
    imageSizeClass: "aspect-[233/187] w-full lg:h-[187px] lg:w-[233px]",
    imageSrc:
      "https://cdn.sanity.io/images/bvh24m7h/production/5a5517e978a28089cdc9582bfa6c5c86031a8bef-488x388.png",
    imageAlt: "Furniture three",
    href: "#",
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
    sectionHeightClass: "aspect-[189/253]",
    imageSizeClass: "aspect-square w-full lg:h-[232px] lg:w-[232px]",
    imageSrc:
      "https://cdn.sanity.io/images/bvh24m7h/production/6d2c04c7d8bb5b448f9d7eeba000d229219fdff1-486x488.png",
    imageAlt: "Furniture four",
    href: "#",
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
    sectionHeightClass: "aspect-[189/253]",
    imageSizeClass: "aspect-[232/152] w-full lg:h-[152px] lg:w-[232px]",
    imageSrc:
      "https://cdn.sanity.io/images/bvh24m7h/production/ad1258cea9cc3420c24283484d8b409ca1e35518-486x320.png",
    imageAlt: "Furniture five",
    href: "#",
  },
] as const satisfies readonly ProductGridItem[];

const storyGridItems = [
  {
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
    imageSizeClass: "aspect-[196/253] w-full lg:h-[253px] lg:w-[196px]",
    imageSrc: STORY_IMAGE,
    imageAlt: "Story one",
    href: "#",
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
    imageSizeClass: "aspect-[196/253] w-full lg:h-[253px] lg:w-[196px]",
    imageSrc: STORY_IMAGE,
    imageAlt: "Story two",
    href: "#",
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
    imageSizeClass: "aspect-[196/253] w-full lg:h-[253px] lg:w-[196px]",
    imageSrc: STORY_IMAGE,
    imageAlt: "Story three",
    href: "#",
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
    imageSizeClass: "aspect-[196/253] w-full lg:h-[253px] lg:w-[196px]",
    imageSrc: STORY_IMAGE,
    imageAlt: "Story four",
    href: "#",
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
    imageSizeClass: "aspect-[196/253] w-full lg:h-[253px] lg:w-[196px]",
    imageSrc: STORY_IMAGE,
    imageAlt: "Story five",
    href: "#",
  },
] as const satisfies readonly ProductGridItem[];

export default function TestPage() {
  return (
    <div className="relative top-[80px] mx-auto min-h-svh md:top-[92px] lg:top-[110px]">
      <Hero className="max-w-container" />

      <AnimateIn className="pb-[86px]" delay={0.04}>
        {/* ProductSplit */}
        <ProductTextImage
          title="Fireplaces"
          description={DEFAULT_DESCRIPTION}
          buttons={[
            { text: "Explore our Fireplaces" },
            { text: "Sell an Antique Chimneypiece" },
          ]}
          imageSrc={IMAGE_URL}
          imageAlt="Fireplace"
        />
        {/* Lighting */}
        <ProductTextImage
          title="Lighting"
          description={DEFAULT_DESCRIPTION}
          buttons={[{ text: "Explore our Lighting" }]}
          imageSrc={IMAGE_URL}
          imageAlt="Lighting"
        />
      </AnimateIn>

      {/* ProductGrid */}
      <AnimateIn delay={0.05}>
        <ProductGrid
          heading="Our latest chimneypieces"
          items={chimneyGridItems}
        />
      </AnimateIn>
      <AnimateIn delay={0.05}>
        <ProductGrid heading="Our latest lighting" items={lightingGridItems} />
      </AnimateIn>

      {/* Furniture */}
      <AnimateIn className="py-[86px]" delay={0.04}>
        <ProductTextImage
          title="Furniture"
          description={DEFAULT_DESCRIPTION}
          buttons={[{ text: "Explore our Furniture" }]}
          imageSrc={FURNITURE_IMAGE}
          imageAlt="Furniture"
        />
      </AnimateIn>

      <AnimateIn delay={0.05}>
        <ProductGrid
          heading="Our latest furniture"
          items={furnitureGridItems}
        />
      </AnimateIn>

      {/* The Grand Collection */}
      <AnimateIn className="bg-[#DFDAD7] py-[86px]" delay={0.04}>
        <ProductTextImage
          label="journal"
          title="The Grand Collection"
          description={DEFAULT_DESCRIPTION}
          buttons={[{ text: "Discover more" }]}
          imageSrc={GRAND_COLLECTION_IMAGE}
          imageAlt="The Grand Collection"
        />
      </AnimateIn>

      <AnimateIn delay={0.05}>
        <ProductGrid
          heading="See more of our latest stories"
          items={storyGridItems}
        />
      </AnimateIn>

      {/* Jamb Journal */}
      <AnimateIn className="py-[176px]" delay={0.04}>
        <ProductTextImage
          title={
            <>
              Subscribe to the <br /> Jamb Journal
            </>
          }
          description={DEFAULT_DESCRIPTION}
          buttons={[{ text: "Discover more" }]}
          imageSrc={JOURNAL_IMAGE}
          imageSizeClass="lg:mr-[86px] lg:h-[560px] lg:w-[410px]"
          imageAlt="Jamb Journal"
        />
      </AnimateIn>
    </div>
  );
}
