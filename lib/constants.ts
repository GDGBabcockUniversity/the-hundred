export const IMAGES = {
  gdg_logo: { src: "/gdg-logo.png", h: 390, w: 390 },
};

export const PAGES = {
  home: "/",
  nominate: "/nominate",
};

export const RECOGNITION_AREAS = [
  "Leadership",
  "Community Building",
  "Innovation",
  "Entrepreneurship",
  "Media & Communication",
  "Design & Creative Practice",
  "Research & Thought Leadership",
  "Service & Volunteering",
  "Problem Solving",
  "Emerging Talent",
] as const;

export const SOCIAL_LINKS = [
  { label: "X", href: "https://x.com", icon: "twitter" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "TikTok", href: "https://tiktok.com", icon: "tiktok" },
] as const;
