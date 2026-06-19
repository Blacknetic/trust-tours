import Image, { type ImageProps } from "next/image";
import { BLUR } from "@/data/blur";

// Drop-in replacement for next/image that auto-applies a base64 blur
// placeholder when we have one for the given src. Keeps tiles from flashing
// blank while the optimized file streams in. Server component — the BLUR map
// never ships to the browser; only the one placeholder per rendered image
// ends up inline in the HTML.
type PhotoProps = Omit<ImageProps, "src"> & { src: string };

export default function Photo({ src, ...rest }: PhotoProps) {
  const blurDataURL = BLUR[src];
  return (
    <Image
      src={src}
      {...(blurDataURL ? { placeholder: "blur", blurDataURL } : {})}
      {...rest}
    />
  );
}
