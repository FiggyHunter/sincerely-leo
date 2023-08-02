import type Category from "./Category";
import type CoverImage from "./CoverImage";

interface Post {
  id: number;
  attributes: {
    Title: string;
    Slug: string;
    Content: string;
    date_posted: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Description: string;
    categories: { data: Category[] };
    cover_image: { data: CoverImage };
  };
}

export default Post;
