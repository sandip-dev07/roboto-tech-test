import { sanityFetch } from "@workspace/sanity/live";
import { querySlugPageData } from "@workspace/sanity/query";
import { notFound } from "next/navigation";

import { PageBuilder } from "@/components/pagebuilder";
import { getSEOMetadata } from "@/lib/seo";

const SANITY_PAGE_SLUG = "/sanity";

async function fetchSanityPageData() {
  return await sanityFetch({
    query: querySlugPageData,
    params: { slug: SANITY_PAGE_SLUG },
  });
}

export async function generateMetadata() {
  const { data: pageData } = await fetchSanityPageData();

  return getSEOMetadata({
    title: pageData?.title ?? pageData?.seoTitle,
    description: pageData?.description ?? pageData?.seoDescription,
    slug: SANITY_PAGE_SLUG,
    contentId: pageData?._id,
    contentType: pageData?._type,
  });
}

export default async function SanityPage() {
  const { data: pageData } = await fetchSanityPageData();

  if (!pageData) {
    return notFound();
  }

  const { _id, _type, pageBuilder, title } = pageData;

  return !Array.isArray(pageBuilder) || pageBuilder.length === 0 ? (
    <div className="flex min-h-[50vh] flex-col items-center justify-center p-4 text-center">
      <h1 className="mb-4 font-semibold text-2xl capitalize">{title}</h1>
      <p className="mb-6 text-muted-foreground">
        This page has no content blocks yet.
      </p>
    </div>
  ) : (
    <PageBuilder id={_id} pageBuilder={pageBuilder} type={_type} />
  );
}
