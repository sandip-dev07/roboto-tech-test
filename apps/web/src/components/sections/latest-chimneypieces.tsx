import Link from "next/link";

const CARD_IMAGE_URL =
  "https://cdn.sanity.io/images/vd3z2it9/production/7c86cf33ebc1f7695d85250853a2b629f931f8d1-1200x900.png?auto=format&fit=max&q=80";

const CHIMNEYPIECES = [
  { title: "Lorem Ipsum", subtitle: "Subtitle" },
  { title: "Lorem Ipsum", subtitle: "Subtitle" },
  { title: "Lorem Ipsum", subtitle: "Subtitle" },
  { title: "Lorem Ipsum", subtitle: "Subtitle" },
] as const;

export function LatestChimneypiecesSection() {
  return (
    <section
      className="bg-[#e9e9e7] px-4 py-7 md:px-6 md:py-8"
      id="latest-chimneypieces"
    >
      <div className="mx-auto max-w-screen-2xl">
        <h2 className="text-center font-serif text-[#161616] text-2xl md:text-[2rem]">
          Our latest chimneypieces
        </h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {CHIMNEYPIECES.map((item, index) => (
            <article key={`${item.title}-${index.toString()}`}>
              <Link
                className="group block"
                href="https://www.jamb.co.uk/fireplaces/antique-chimneypieces"
                rel="noreferrer"
                target="_blank"
              >
                <div className="aspect-[1.32/1] overflow-hidden bg-black">
                  <img
                    alt={item.title}
                    className="h-full w-full rounded-none object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    src={CARD_IMAGE_URL}
                  />
                </div>
                <div className="pt-2 text-center">
                  <h3 className="font-serif text-[#6e685f] text-lg leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-light text-[#8f8980] text-lg leading-tight">
                    {item.subtitle}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
