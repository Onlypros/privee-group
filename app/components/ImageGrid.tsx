// app/components/ImageGrid.tsx
// Purpose: Standardize responsive image grids (used in Selected Work).
// Why: Prevents duplicating <figure>/<Image> boilerplate.
// Usage: <ImageGrid images={[…]} />

import Image from "next/image";

export type GridImage = {
  src: string;
  alt: string;
  /** Optional custom object-position (e.g. "object-[50%_40%]"). */
  objectPos?: string;
  /** Mark as LCP priority (only for the very first hero image). */
  priority?: boolean;
  /** Span multiple columns if needed (rare). */
  colSpan?: number;
};

type ImageGridProps = {
  images: GridImage[];
};

const SIZES =
  "(max-width: 768px) 100vw, (max-width: 1152px) 50vw, 576px";

export default function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
      {images.map((img, i) => (
        <figure
          key={i}
          className={`relative aspect-[3/4] overflow-hidden bg-neutral-200 ${
            img.colSpan ? `md:col-span-${img.colSpan}` : ""
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes={SIZES}
            className={`object-cover ${img.objectPos ?? "object-center"}`}
            decoding={img.priority ? undefined : "async"}
            priority={img.priority}
            fetchPriority={img.priority ? "high" : undefined}
          />
        </figure>
      ))}
    </div>
  );
}
