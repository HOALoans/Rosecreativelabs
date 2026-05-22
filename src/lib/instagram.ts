export const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/madelinerose.arts/";
export const INSTAGRAM_HANDLE = "@madelinerose.arts";

export type InstagramMedia = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
};

export function getInstagramImageUrl(item: InstagramMedia): string | null {
  if (item.media_type === "VIDEO") {
    return item.thumbnail_url ?? null;
  }
  return item.media_url ?? item.thumbnail_url ?? null;
}

export async function fetchInstagramMedia(
  limit = 6
): Promise<InstagramMedia[] | null> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  if (!token || !userId) {
    return null;
  }

  try {
    const params = new URLSearchParams({
      fields: "id,caption,media_type,media_url,thumbnail_url,permalink",
      limit: String(limit),
      access_token: token,
    });

    const res = await fetch(
      `https://graph.instagram.com/v21.0/${userId}/media?${params}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      console.error("Instagram API error:", res.status, await res.text());
      return null;
    }

    const data = (await res.json()) as { data?: InstagramMedia[] };
    return data.data?.filter((item) => getInstagramImageUrl(item)) ?? null;
  } catch (err) {
    console.error("Instagram fetch failed:", err);
    return null;
  }
}
