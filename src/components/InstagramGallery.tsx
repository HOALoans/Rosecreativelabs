import Image from "next/image";
import Link from "next/link";
import { IconGallery } from "./icons";
import {
  fetchInstagramMedia,
  getInstagramImageUrl,
  INSTAGRAM_HANDLE,
  INSTAGRAM_PROFILE_URL,
  type InstagramMedia,
} from "@/lib/instagram";

function FallbackGrid() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-2.5 md:grid-cols-[2fr_1fr_1fr] md:grid-rows-[120px_120px]">
      <div className="row-span-2 flex flex-col items-center justify-center gap-3 rounded-[10px] border border-border bg-rose-pale p-6 md:col-span-1">
        <IconGallery />
        <p className="text-center font-sans text-xs leading-relaxed text-muted">
          Connect Instagram API keys in{" "}
          <code className="text-rose-mid">.env.local</code> to load live posts
          from {INSTAGRAM_HANDLE}
        </p>
        <Link
          href={INSTAGRAM_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-rose-mid px-4 py-2 font-sans text-xs font-medium text-cream no-underline transition-colors hover:bg-rose-dark"
        >
          View on Instagram →
        </Link>
      </div>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="flex h-[120px] items-center justify-center rounded-[10px] border border-border bg-rose-pale"
        >
          <IconGallery />
        </div>
      ))}
    </div>
  );
}

export async function InstagramGallery() {
  const posts = await fetchInstagramMedia(6);

  if (!posts?.length) {
    return <FallbackGrid />;
  }

  const [featured, ...rest] = posts;

  return (
    <div className="mt-6 grid grid-cols-2 gap-2.5 md:grid-cols-[2fr_1fr_1fr] md:grid-rows-[200px_200px]">
      <InstagramPost
        item={featured}
        className="row-span-2 min-h-[200px] md:col-span-1 md:min-h-0"
        priority
      />
      {rest.slice(0, 4).map((item) => (
        <InstagramPost key={item.id} item={item} className="h-[120px] md:h-auto" />
      ))}
    </div>
  );
}

function InstagramPost({
  item,
  className = "",
  priority = false,
}: {
  item: InstagramMedia;
  className?: string;
  priority?: boolean;
}) {
  const imageUrl = getInstagramImageUrl(item);
  if (!imageUrl) return null;

  return (
    <Link
      href={item.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-[10px] border border-border bg-rose-pale ${className}`}
      aria-label={item.caption?.slice(0, 80) ?? "View on Instagram"}
    >
      <Image
        src={imageUrl}
        alt={item.caption?.slice(0, 120) ?? "Instagram post"}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        priority={priority}
      />
      <span className="absolute inset-0 bg-rose-deep/0 transition-colors group-hover:bg-rose-deep/20" />
    </Link>
  );
}
