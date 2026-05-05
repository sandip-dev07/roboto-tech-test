const FooterData = {
  contact: {
    phone: "+44 (0) 207 730 2122",
    address: ["95-97 Pimlico Rd", "London SW1W 8PH"],
    email: "hello@jamb.co.uk",
  },
  newsletter: {
    title: "Newsletter",
    placeholder: "Search",
    ctaLabel: "Subscribe",
    privacyLabel: "I agree to our Privacy Policy",
  },
  columns: [
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
        links: ["Praesentium", "Voluptatibus", "Accusamus", "Iusto", "Dignissimos"],
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
  ],
} as const;

function FooterColumnSection({
  title,
  links,
}: {
  title: string;
  links: readonly string[];
}) {
  return (
    <div>
      <div className="mb-[14px] h-[1px] bg-color-link" />
      <h4 className="mb-[0px] font-serif text-[14px] leading-[24px] font-medium text-color-primary sm:text-[16px] sm:leading-[31px]">
        {title}
      </h4>
      {links.length > 0 ? (
        <ul className="font-serif text-[14px] leading-[24px] font-medium text-color-link sm:text-[16px] sm:leading-[30.7px]">
          {links.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-[80px] w-full bg-[#E3E3E3] py-[30px] pb-[48px] lg:mt-[110px]">
      <div className="max-w-container mx-auto px-[20px] md:px-[38px]">
        <div className="flex flex-col gap-[28px] pb-[28px] md:gap-[36px] lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-[20px] sm:flex-row sm:gap-[48px] md:gap-[72px] lg:gap-[100px]">
            <div>
              <p className="font-serif text-[14px] leading-[22px] font-medium text-color-link sm:text-[16px] sm:leading-[25px]">
                Tel: {FooterData.contact.phone}
              </p>
              {FooterData.contact.address.map((line) => (
                <p
                  className="font-serif text-[14px] leading-[22px] font-medium text-color-link sm:text-[16px] sm:leading-[25px]"
                  key={line}
                >
                  {line}
                </p>
              ))}
            </div>

            <div>
              <a
                href={`mailto:${FooterData.contact.email}`}
                className="font-serif text-[14px] leading-[22px] font-medium text-color-link sm:text-[16px] sm:leading-[25px]"
              >
                {FooterData.contact.email}
              </a>
            </div>
          </div>

          <div className="w-full lg:w-auto">
            <p className="mb-[11px] font-serif text-[14px] leading-[22px] font-medium text-color-link sm:text-[16px] sm:leading-[25px]">
              {FooterData.newsletter.title}
            </p>
            <div className="mb-[11px] flex flex-col gap-[4px] sm:flex-row sm:gap-[2px]">
              <input
                type="email"
                placeholder={FooterData.newsletter.placeholder}
                className="min-h-[43px] h-full w-full min-w-0 flex-1 bg-white px-[10px] text-[14px] font-normal text-color-link [font-family:var(--font-polaris)] placeholder:text-color-link sm:min-w-[280px] sm:px-[8px] sm:text-[16px] md:min-w-[401px]"
              />
              <button className="h-[43px] w-full bg-white px-[10px] text-start font-serif text-[14px] leading-[22px] font-medium text-color-link sm:w-[151px] sm:px-2.5 sm:text-base sm:leading-[25px]">
                {FooterData.newsletter.ctaLabel}
              </button>
            </div>
            <label className="flex items-start gap-[8px] sm:items-center">
              <div className="mt-[6px] h-[12px] w-[12px] shrink-0 rounded-full border-2 border-color-link sm:mt-0" />
              <span className="font-serif text-[14px] leading-[22px] font-medium text-color-link sm:text-[16px] sm:leading-[25px]">
                {FooterData.newsletter.privacyLabel}
              </span>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[32px] sm:grid-cols-2 md:gap-[36px] lg:grid-cols-5 lg:gap-[40px]">
          {FooterData.columns.map((column, columnIndex) => (
            <div
              className="space-y-[18px]"
              key={`footer-column-${columnIndex.toString()}`}
            >
              {column.map((section) => (
                <FooterColumnSection
                  key={section.title}
                  links={section.links}
                  title={section.title}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
