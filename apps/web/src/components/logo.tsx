import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import type { Maybe, SanityImageProps } from "@/types";
import { SanityImage } from "./elements/sanity-image";

const LOGO_URL =
  "https://cdn.sanity.io/images/bvh24m7h/production/7f061de7b2e17609d9ab3df2a4c85f60e9098e80-4096x1702.png";

type LogoProps = {
  src?: Maybe<string | StaticImageData>;
  image?: Maybe<SanityImageProps>;
  alt?: Maybe<string>;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
};

export function Logo({
  src,
  alt = "logo",
  image,
  width = 108,
  height = 45,
  priority = true,
  className,
  imageClassName,
}: LogoProps) {
  return (
    <Link className={className} href="/">
      {image ? (
        <SanityImage
          alt={alt ?? "logo"}
          className={imageClassName ?? "w-27 h-11.25 dark:invert"}
          // width={width}
          // height={height}
          decoding="sync"
          image={image}
          loading="eager"
        />
      ) : (
        <Image
          alt={alt ?? "logo"}
          className={imageClassName ?? "h-11.25 w-27 dark:invert"}
          decoding="sync"
          height={height}
          loading="eager"
          priority={priority}
          src={src ?? LOGO_URL}
          width={width}
        />
      )}
    </Link>
  );
}
