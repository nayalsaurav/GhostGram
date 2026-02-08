import { MetadataRoute } from "next";
import { connectToDatabase } from "@/lib/database";
import User from "@/model/user";

const siteUrl = "https://ghostgram.nayalsaurav.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  // Dynamic user profile pages
  let userPages: MetadataRoute.Sitemap = [];

  try {
    await connectToDatabase();

    const users = await User.find(
      { isAccepting: true },
      { username: 1, updatedAt: 1 }
    ).lean();

    userPages = users.map((user) => ({
      url: `${siteUrl}/u/${user.username}`,
      lastModified: user.updatedAt || new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }

  return [...staticPages, ...userPages];
}
