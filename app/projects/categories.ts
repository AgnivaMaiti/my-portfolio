// Project categories used for filtering; keys match the `tags` frontmatter field.
export const categories = [
  { key: "ai", label: "AI & ML" },
  { key: "mobile", label: "Mobile & Flutter" },
  { key: "web", label: "Web" },
  { key: "tools", label: "Tools & Hardware" },
] as const;

export type CategoryKey = (typeof categories)[number]["key"];

export const categoryLabel = (key: string) =>
  categories.find((c) => c.key === key)?.label ?? key;
