import { Grid3X3Icon } from "lucide-react";
import { defineField, defineType } from "sanity";

import { imageWithAltField } from "@/schemaTypes/common";

const productGridItem = defineField({
  name: "productGridItem",
  title: "Product Grid Item",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    imageWithAltField({
      title: "Item Image",
      description: "Image for this grid card",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "Link URL",
      type: "customUrl",
    }),
    defineField({
      name: "layout",
      title: "Card Layout",
      type: "string",
      initialValue: "standardLandscape",
      options: {
        list: [
          { title: "Standard Landscape", value: "standardLandscape" },
          { title: "Tall Portrait", value: "tallPortrait" },
          { title: "Story Portrait", value: "storyPortrait" },
          { title: "Furniture Portrait", value: "furniturePortrait" },
          { title: "Furniture Landscape", value: "furnitureLandscape" },
          { title: "Furniture Square", value: "furnitureSquare" },
          { title: "Furniture Wide", value: "furnitureWide" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "image",
      layout: "layout",
    },
    prepare: ({ title, subtitle, media, layout }) => ({
      title: title || "Grid Item",
      subtitle: [subtitle, layout].filter(Boolean).join(" • "),
      media,
    }),
  },
});

export const productGridShowcase = defineType({
  name: "productGridShowcase",
  title: "Product Grid Showcase",
  type: "object",
  icon: Grid3X3Icon,
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sectionId",
      title: "Section ID",
      type: "string",
      description:
        "Optional anchor ID for in-page navigation, for example latest-lighting",
    }),
    defineField({
      name: "backgroundTone",
      title: "Background Tone",
      type: "string",
      initialValue: "mist",
      options: {
        list: [
          { title: "Mist", value: "mist" },
          { title: "None", value: "none" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [productGridItem],
      validation: (Rule) => Rule.min(1).required(),
    }),
  ],
  preview: {
    select: {
      heading: "heading",
      items: "items",
    },
    prepare: ({ heading, items = [] }) => ({
      title: heading || "Product Grid Showcase",
      subtitle: `${items.length} item${items.length === 1 ? "" : "s"}`,
    }),
  },
});
