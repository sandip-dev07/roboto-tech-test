import { ArmchairIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

import {
  buttonsField,
  imageWithAltField,
  richTextField,
} from "@/schemaTypes/common";

export const productShowcase = defineType({
  name: "productShowcase",
  title: "Product Showcase",
  type: "object",
  icon: ArmchairIcon,
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      description: "Optional small label shown above the title",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Main heading for this section",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sectionId",
      title: "Section ID",
      type: "string",
      description:
        "Optional anchor ID for in-page navigation, for example fireplaces or journal",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      description: "Supporting copy shown below the title",
    }),
    buttonsField,
    imageWithAltField({
      title: "Section Image",
      description: "Main image shown beside the copy",
    }),
    defineField({
      name: "backgroundTone",
      title: "Background Tone",
      type: "string",
      initialValue: "none",
      options: {
        list: [
          { title: "None", value: "none" },
          { title: "Sand", value: "sand" },
        ],
        layout: "radio",
      },
    }),
    richTextField,
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare: ({ title, media }) => ({
      title: title || "Product Showcase",
      subtitle: "Product Showcase",
      media,
    }),
  },
});
