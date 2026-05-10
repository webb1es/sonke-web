export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  imageUrl?: string;
  author?: string;
}
