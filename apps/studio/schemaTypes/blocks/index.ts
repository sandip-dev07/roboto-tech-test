import { cta } from "@/schemaTypes/blocks/cta";
import { faqAccordion } from "@/schemaTypes/blocks/faq-accordion";
import { featureCardsIcon } from "@/schemaTypes/blocks/feature-cards-icon";
import { hero } from "@/schemaTypes/blocks/hero";
import { imageLinkCards } from "@/schemaTypes/blocks/image-link-cards";
import { productGridShowcase } from "@/schemaTypes/blocks/product-grid-showcase";
import { productShowcase } from "@/schemaTypes/blocks/product-showcase";
import { richTextBlock } from "@/schemaTypes/blocks/rich-text";
import { subscribeNewsletter } from "@/schemaTypes/blocks/subscribe-newsletter";

export const pageBuilderBlocks = [
  hero,
  productShowcase,
  productGridShowcase,
  cta,
  featureCardsIcon,
  faqAccordion,
  imageLinkCards,
  richTextBlock,
  subscribeNewsletter,
];
