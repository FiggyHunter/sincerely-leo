import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import { getPosts } from "@/api/posts/getPosts";

export async function get(context) {
  const posts = await getPosts();
  return rss({
    stylesheet: `/rss.xsl`,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.attributes.Title,
      link: `/blog/${post.attributes.Slug}`,
      pubDate: post.attributes.publishedAt,
    })),
  });
}
