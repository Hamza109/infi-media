export type FeaturedWorkSlide = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tags?: string[];
};

// Dummy data for the featured work carousel
export const featuredWorkSlides: FeaturedWorkSlide[] = [
  {
    id: "slide-1",
    title: "Infographics & Creative Design",
    subtitle: "Beauty product campaign series",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    tags: ["UGC", "Color Grade", "3D"],
  },
  {
    id: "slide-2",
    title: "Product Photography / Videography",
    subtitle: "Studio portrait and lifestyle",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
    tags: ["Lookbook", "Retouch", "Motion"],
  },
  {
    id: "slide-3",
    title: "Marketplace Specific Imaging",
    subtitle: "E-commerce visuals and ad sets",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    tags: ["Amazon", "Flipkart", "A/B Test"],
  },
];
