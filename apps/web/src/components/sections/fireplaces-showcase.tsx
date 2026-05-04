import Link from "next/link";

const FIREPLACES_IMAGE_URL =
  "https://cdn.sanity.io/images/vd3z2it9/production/0c38422fbbd2fc15ae7d06dbccfdb20f91a9d209-8192x4838.jpg?auto=format&fit=max&q=80&rect=2143%2C1354%2C4092%2C2584&w=1425";

const SHOWCASE_LINKS = [
  {
    href: "https://www.jamb.co.uk/fireplaces",
    label: "Explore our Fireplaces",
  },
  {
    href: "https://www.jamb.co.uk/fireplaces/antique-chimneypieces",
    label: "Sell an Antique Chimneypiece",
  },
] as const;

export function FireplacesShowcaseSection() {
  return (
    <section className="my-10 px-4 md:my-16 md:px-6" id="fireplaces-showcase">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid items-center gap-10 bg-[#f6f2ec] px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.95fr)] lg:gap-14 lg:px-16 lg:py-14">
          <div className="flex justify-center">
            <div className="max-w-md text-center">
              <h2 className="font-serif text-[#171717] text-3xl leading-none md:text-[3rem]">
                Fireplaces
              </h2>
              <p className="mt-8 text-[#171717] text-sm leading-7 md:text-base">
                Jamb&apos;s comprehensive inventory of antique fireplaces spans
                the 17th-century and beyond, recalling the names of Britain&apos;s
                finest architects and inspiring reproductions in stone and
                marble.
              </p>
              <div className="mt-8 flex flex-col items-center gap-2">
                {SHOWCASE_LINKS.map((link) => (
                  <Link
                    className="min-w-[186px] border border-[#b8b0a7] px-4 py-2 text-center font-light text-[#6f6a63] text-sm transition-colors hover:bg-[#ece6de] hover:text-[#171717]"
                    href={link.href}
                    key={link.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="justify-self-center lg:justify-self-end">
            <img
              alt="Classical stone fireplace with gilt mirror above"
              className="h-auto w-full max-w-[29rem] rounded-none object-cover shadow-none md:max-w-[34rem]"
              loading="lazy"
              src={FIREPLACES_IMAGE_URL}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
