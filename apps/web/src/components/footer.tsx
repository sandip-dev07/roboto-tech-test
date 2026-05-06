import { sanityFetch } from "@workspace/sanity/live";
import { queryFooterData } from "@workspace/sanity/query";
import Link from "next/link";

type FooterLink = {
  _key: string;
  name: string | null;
  openInNewTab: boolean | null;
  href: string | null;
};

type FooterSection = {
  _key: string;
  title: string | null;
  links: FooterLink[] | null;
};

type FooterGroup = {
  _key: string;
  sections: FooterSection[] | null;
};

type FooterData = {
  _id: string;
  subtitle?: string | null;
  contact?: {
    phone?: string | null;
    addressLines?: Array<string | null> | null;
    email?: string | null;
  } | null;
  newsletter?: {
    title?: string | null;
    placeholder?: string | null;
    ctaLabel?: string | null;
    privacyLabel?: string | null;
  } | null;
  columnGroups?: FooterGroup[] | null;
  columns?: Array<{
    _key: string;
    title: string | null;
    links: FooterLink[] | null;
  }> | null;
};

function FooterColumnSection({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <div className="mb-[14px] h-[1px] bg-color-link" />
      <h4 className="mb-[0px] font-serif text-[14px] leading-[24px] font-medium text-color-primary font-semibold sm:text-[16px] sm:leading-[31px]">
        {title}
      </h4>
      {links.length > 0 ? (
        <ul className="font-serif text-[14px] leading-[24px] font-medium text-color-link sm:text-[16px] sm:leading-[30.7px]">
          {links.map((link) => (
            <li key={link._key}>
              {link.href ? (
                <Link
                  href={link.href}
                  rel={link.openInNewTab ? "noreferrer" : undefined}
                  target={link.openInNewTab ? "_blank" : undefined}
                >
                  {link.name}
                </Link>
              ) : (
                <span>{link.name}</span>
              )}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function FooterClientView({ data }: { data: FooterData }) {
  const columnGroups = data.columnGroups ?? [];
  const contact = data.contact;
  const newsletter = data.newsletter;

  return (
    <footer className="mt-[80px] w-full bg-[#E3E3E3] py-[30px] pb-[48px] lg:mt-[110px]">
      <div className="max-w-container mx-auto px-[20px] md:px-[38px]">
        <div className="flex flex-col gap-[28px] pb-[28px] md:gap-[36px] lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-[20px] sm:flex-row sm:gap-[48px] md:gap-[72px] lg:gap-[100px]">
            <div>
              {contact?.phone ? (
                <p className="font-serif text-[14px] leading-[22px] font-medium text-color-link sm:text-[16px] sm:leading-[25px]">
                  Tel: {contact.phone}
                </p>
              ) : null}
              {contact?.addressLines?.map((line, index: number) =>
                line ? (
                  <p
                    className="font-serif text-[14px] leading-[22px] font-medium text-color-link sm:text-[16px] sm:leading-[25px]"
                    key={`${line}-${index}`}
                  >
                    {line}
                  </p>
                ) : null,
              )}
            </div>

            <div>
              {contact?.email ? (
                <a
                  className="font-serif text-[14px] leading-[22px] font-medium text-color-link sm:text-[16px] sm:leading-[25px]"
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </a>
              ) : null}
            </div>
          </div>

          <div className="w-full lg:w-auto">
            {newsletter?.title ? (
              <p className="mb-[11px] font-serif text-[14px] leading-[22px] font-medium text-color-link sm:text-[16px] sm:leading-[25px]">
                {newsletter.title}
              </p>
            ) : null}
            <div className="mb-[11px] flex flex-col gap-[4px] sm:flex-row sm:gap-[2px]">
              <input
                className="min-h-[43px] h-full w-full min-w-0 flex-1 bg-white px-[10px] text-[14px] font-normal text-color-link [font-family:var(--font-polaris)] placeholder:text-color-link sm:min-w-[280px] sm:px-[8px] sm:text-[16px] md:min-w-[401px]"
                placeholder={newsletter?.placeholder ?? ""}
                type="email"
              />
              <button
                className="h-[43px] w-full bg-white px-[10px] text-start font-serif text-[14px] leading-[22px] font-medium text-color-link sm:w-[151px] sm:px-2.5 sm:text-base sm:leading-[25px]"
                type="button"
              >
                {newsletter?.ctaLabel}
              </button>
            </div>
            {newsletter?.privacyLabel ? (
              <div className="flex items-start gap-[8px] sm:items-center">
                <div className="mt-[6px] h-[12px] w-[12px] shrink-0 rounded-full border-2 border-color-link sm:mt-0" />
                <span className="font-serif text-[14px] leading-[22px] font-medium text-color-link sm:text-[16px] sm:leading-[25px]">
                  {newsletter.privacyLabel}
                </span>
              </div>
            ) : null}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[32px] sm:grid-cols-2 md:gap-[36px] lg:grid-cols-5 lg:gap-[40px]">
          {columnGroups.map((group: FooterGroup, groupIndex: number) => (
            <div
              className="space-y-[18px]"
              key={group._key ?? `footer-column-${groupIndex}`}
            >
              {(group.sections ?? []).map((section: FooterSection) =>
                section?.title ? (
                  <FooterColumnSection
                    key={section._key ?? section.title}
                    links={(section.links ?? []).filter(
                      (link): link is FooterLink => Boolean(link?.name),
                    )}
                    title={section.title}
                  />
                ) : null,
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterFallback() {
  return (
    <footer className="mt-[80px] w-full bg-[#E3E3E3] py-[30px] pb-[48px] lg:mt-[110px]">
      <div className="max-w-container mx-auto px-[20px] md:px-[38px]">
        <div className="h-[320px] animate-pulse bg-transparent" />
      </div>
    </footer>
  );
}

export default async function Footer() {
  const { data } = await sanityFetch({
    query: queryFooterData,
  });

  const footerData = data as FooterData | null;

  if (!footerData) {
    return <FooterFallback />;
  }

  return <FooterClientView data={footerData} />;
}
