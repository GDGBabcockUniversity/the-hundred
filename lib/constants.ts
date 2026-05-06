export const IMAGES = {
  gdg_logo: { src: "/gdg-logo.svg", h: 100, w: 100 },
};

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Methodology", href: "/methodology" },
  { label: "The Class", href: "/the-class" },
  { label: "FAQ", href: "/faq" },
] as const;

export const STEPPER_LABELS = [
  "Nomination Type",
  "Nominee Info",
  "Recognition Area",
  "Contribution",
  "Evidence",
  "Declaration",
] as const;

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
