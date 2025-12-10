export type Testimonial = {
  id: string
  name: string
  role: string
  quote: string
}

// Dummy testimonials data
export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Founder, D2C Brand",
    role: "Beauty & Wellness",
    quote:
      "“INFI-D MEDIA completely reworked how we show up online. Our reels finally look and feel like our brand.”",
  },
  {
    id: "testimonial-2",
    name: "Creator, Education Channel",
    role: "YouTube",
    quote:
      "“They understand pacing, hooks, and thumbnails better than anyone we’ve worked with. Huge boost in watch-time.”",
  },
  {
    id: "testimonial-3",
    name: "CMO, SaaS Startup",
    role: "B2B",
    quote:
      "“Feels like having an in-house creative team without the hiring stress. Super reliable.”",
  },
]

