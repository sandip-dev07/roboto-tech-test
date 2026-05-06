import { LayoutPanelLeft, Link, PanelBottom } from "lucide-react";
import { defineField, defineType } from "sanity";

const footerColumnLink = defineField({
  name: "footerColumnLink",
  type: "object",
  icon: Link,
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      description: "Name for the link",
    }),
    defineField({
      name: "url",
      type: "customUrl",
    }),
  ],
  preview: {
    select: {
      title: "name",
      externalUrl: "url.external",
      urlType: "url.type",
      internalUrl: "url.internal.slug.current",
      openInNewTab: "url.openInNewTab",
    },
    prepare({ title, externalUrl, urlType, internalUrl, openInNewTab }) {
      const url = urlType === "external" ? externalUrl : internalUrl;
      const newTabIndicator = openInNewTab ? " →" : "";
      const truncatedUrl =
        url?.length > 30 ? `${url.substring(0, 30)}...` : url;

      return {
        title: title || "Untitled Link",
        subtitle: `${urlType === "external" ? "External" : "Internal"} • ${truncatedUrl}${newTabIndicator}`,
        media: Link,
      };
    },
  },
});

const footerColumn = defineField({
  name: "footerColumn",
  type: "object",
  icon: LayoutPanelLeft,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "Title for the column",
    }),
    defineField({
      name: "links",
      type: "array",
      title: "Links",
      description: "Links for the column",
      of: [footerColumnLink],
    }),
  ],
  preview: {
    select: {
      title: "title",
      links: "links",
    },
    prepare({ title, links = [] }) {
      return {
        title: title || "Untitled Column",
        subtitle: `${links.length} link${links.length === 1 ? "" : "s"}`,
      };
    },
  },
});

const footerColumnGroup = defineField({
  name: "footerColumnGroup",
  title: "Footer Column Group",
  type: "object",
  fields: [
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [footerColumn],
    }),
  ],
  preview: {
    select: {
      sections: "sections",
    },
    prepare({ sections = [] }) {
      return {
        title: "Footer Column Group",
        subtitle: `${sections.length} section${sections.length === 1 ? "" : "s"}`,
      };
    },
  },
});

export const footer = defineType({
  name: "footer",
  type: "document",
  title: "Footer",
  description: "Footer content for your website",
  fields: [
    defineField({
      name: "label",
      type: "string",
      initialValue: "Footer",
      title: "Label",
      description: "Label used to identify footer in the CMS",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      type: "text",
      rows: 2,
      title: "Subtitle",
      description: "Subtitle that sits beneath the logo in the footer",
    }),
    defineField({
      name: "columns",
      type: "array",
      title: "Legacy Columns",
      description: "Columns for the older footer variant",
      of: [footerColumn],
    }),
    defineField({
      name: "contact",
      title: "Contact",
      type: "object",
      fields: [
        defineField({
          name: "phone",
          title: "Phone",
          type: "string",
        }),
        defineField({
          name: "addressLines",
          title: "Address Lines",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "email",
          title: "Email",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "newsletter",
      title: "Newsletter",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "placeholder",
          title: "Placeholder",
          type: "string",
        }),
        defineField({
          name: "ctaLabel",
          title: "CTA Label",
          type: "string",
        }),
        defineField({
          name: "privacyLabel",
          title: "Privacy Label",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "columnGroups",
      type: "array",
      title: "Column Groups",
      description: "Grouped footer columns for the current footer layout",
      of: [footerColumnGroup],
    }),
  ],
  preview: {
    select: {
      title: "label",
    },
    prepare: ({ title }) => ({
      title: title || "Untitled Footer",
      media: PanelBottom,
    }),
  },
});
