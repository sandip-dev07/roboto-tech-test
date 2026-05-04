import { sanityFetch } from "@workspace/sanity/live";
import {
  queryGlobalSeoSettings,
  querySettingsData,
} from "@workspace/sanity/query";
import type {
  QueryGlobalSeoSettingsResult,
  QuerySettingsDataResult,
} from "@workspace/sanity/types";
import Link from "next/link";

type FooterSettings = NonNullable<QueryGlobalSeoSettingsResult> &
  Pick<NonNullable<QuerySettingsDataResult>, "contactEmail">;

const FALLBACK_EMAIL = "hello@jamb.co.uk";
const FOOTER_PHONE = "+44 (0) 207 730 2122";
const FOOTER_ADDRESS = ["95-97 Pimlico Rd", "London SW1W 8PH"];

const FOOTER_COLUMNS = [
  [
    {
      title: "Reproduction Chimneypieces",
      links: ["Marble", "Stone", "Grates & Accessories", "Guide to Jamb Marbles"],
    },
    {
      title: "Antique Chimneypieces",
      links: ["French & Italian", "Georgian", "Regency"],
    },
    {
      title: "Sell an Antique Chimneypiece",
      links: [],
    },
  ],
  [
    {
      title: "Reproduction Lighting",
      links: [
        "Hanging Globes",
        "Hanging Lanterns",
        "Wall Lights",
        "Dish Lights",
        "Table Lamps",
        "Chains & Brackets",
      ],
    },
  ],
  [
    {
      title: "Reproduction Furniture",
      links: ["Seating", "Tables", "Mirrors", "The Pantry Collection"],
    },
    {
      title: "Antique Furniture",
      links: [
        "Seating",
        "Tables",
        "Desks",
        "Bookcases & Cabinets",
        "Chests",
        "Mirrors",
        "Fire Accessories",
        "Objects",
        "Works of Arts",
        "Lighting",
      ],
    },
  ],
  [
    {
      title: "Journal",
      links: [
        "Praesentium",
        "Voluptatibus",
        "Accusamus",
        "Iusto",
        "Dignissimos",
      ],
    },
  ],
  [
    {
      title: "About",
      links: [
        "Founders",
        "Team",
        "History",
        "Galleries",
        "Workshops",
        "Showrooms",
        "Terms & Conditions",
      ],
    },
  ],
] as const;

export async function FooterServer() {
  const [settingsResponse, settingsMetaResponse] = await Promise.all([
    sanityFetch({
      query: queryGlobalSeoSettings,
    }),
    sanityFetch({
      query: querySettingsData,
    }),
  ]);

  if (!(settingsResponse?.data && settingsMetaResponse?.data)) {
    return <FooterSkeleton />;
  }

  const settingsData: FooterSettings = {
    ...settingsResponse.data,
    contactEmail: settingsMetaResponse.data.contactEmail ?? null,
  };

  return <Footer settingsData={settingsData} />;
}

export function FooterSkeleton() {
  return (
    <footer className="mt-20 bg-[#e3e3e3] text-[#9f9f9f]">
      <section className="mx-auto max-w-screen-2xl px-6 py-10 md:px-10 lg:py-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.1fr_2fr] lg:items-start">
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
            <div className="space-y-3">
              <div className="h-7 w-56 animate-pulse rounded bg-stone-300/70" />
              <div className="h-7 w-52 animate-pulse rounded bg-stone-300/70" />
              <div className="h-7 w-48 animate-pulse rounded bg-stone-300/70" />
            </div>
            <div className="h-7 w-56 animate-pulse rounded bg-stone-300/70" />
          </div>
          <div className="space-y-5">
            <div className="h-7 w-36 animate-pulse rounded bg-stone-300/70" />
            <div className="h-14 w-full animate-pulse rounded bg-stone-300/70" />
            <div className="h-7 w-80 animate-pulse rounded bg-stone-300/70" />
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {Array.from({ length: 5 }).map((_, columnIndex) => (
            <div className="space-y-8" key={`footer-skeleton-${columnIndex.toString()}`}>
              {Array.from({ length: columnIndex === 0 || columnIndex === 2 ? 2 : 1 }).map(
                (_, sectionIndex) => (
                  <div className="border-stone-500/60 border-t pt-5" key={sectionIndex}>
                    <div className="h-8 w-48 animate-pulse rounded bg-stone-300/70" />
                    <div className="mt-5 space-y-4">
                      {Array.from({ length: 4 }).map((__, itemIndex) => (
                        <div
                          className="h-6 w-40 animate-pulse rounded bg-stone-300/70"
                          key={itemIndex}
                        />
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </section>
    </footer>
  );
}

function FooterSection({
  title,
  links,
}: {
  title: string;
  links: readonly string[];
}) {
  return (
    <section className="border-stone-500/60 border-t pt-5">
      <h3 className="font-serif text-[1.1rem] leading-none text-[#1d1d1b] sm:text-[1.35rem]">
        {title}
      </h3>
      {links.length > 0 ? (
        <ul className="mt-4 space-y-2.5 font-light text-[1rem] leading-tight text-[#9f9f9f] sm:text-[1.1rem]">
          {links.map((link) => (
            <li key={link}>
              <Link className="transition-colors hover:text-[#1d1d1b]" href="#">
                {link}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function Footer({ settingsData }: { settingsData: FooterSettings }) {
  const contactEmail = settingsData.contactEmail || FALLBACK_EMAIL;

  return (
    <footer className="mt-20 bg-[#e3e3e3] text-[#9f9f9f]">
      <section className="mx-auto max-w-screen-2xl px-6 py-10 md:px-10 lg:py-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.1fr_2fr] lg:items-start">
          <div className="grid gap-6 font-light text-[1.1rem] leading-tight sm:grid-cols-2 sm:text-[1.35rem] lg:col-span-2">
            <div>
              <p>Tel: {FOOTER_PHONE}</p>
              {FOOTER_ADDRESS.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div>
              <a
                className="transition-colors hover:text-[#1d1d1b]"
                href={`mailto:${contactEmail}`}
              >
                {contactEmail}
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-light text-[1.1rem] leading-tight sm:text-[1.35rem]">
              Newsletter
            </h2>
            <form action="#" className="mt-3 space-y-4">
              <div className="grid overflow-hidden border border-[#d8d8d8] bg-white sm:grid-cols-[1fr_auto]">
                <input
                  className="min-h-14 border-0 bg-transparent px-3 font-light text-[1rem] text-[#1d1d1b] outline-none placeholder:text-[#a5a5a5] sm:text-[1.1rem]"
                  placeholder="Search"
                  type="text"
                />
                <button
                  className="border-[#d8d8d8] border-t px-4 py-3 text-left font-light text-[1rem] text-[#7d7d7d] transition-colors hover:bg-stone-100 hover:text-[#1d1d1b] sm:border-t-0 sm:border-l sm:px-5 sm:text-[1.1rem]"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
              <label className="flex items-center gap-3 font-light text-[1rem] text-[#9f9f9f] sm:text-[1.1rem]">
                <input
                  className="size-4 appearance-none rounded-full border border-[#9f9f9f] bg-transparent checked:border-[#1d1d1b] checked:bg-[#1d1d1b]"
                  type="checkbox"
                />
                <span>I agree to our Privacy Policy</span>
              </label>
            </form>
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {FOOTER_COLUMNS.map((group, groupIndex) => (
            <div className="space-y-8" key={`footer-column-${groupIndex.toString()}`}>
              {group.map((section) => (
                <FooterSection
                  key={section.title}
                  links={section.links}
                  title={section.title}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </footer>
  );
}
