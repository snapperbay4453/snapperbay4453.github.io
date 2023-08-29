interface Frontmatter {
  title: string;
  description?: string;
}
export interface MarkdownInstance {
  /* Any data specified in this file's YAML frontmatter */
  frontmatter: Frontmatter;
  /* The file path of this file */
  file: string;
  /* The rendered path of this file */
  url: string | undefined;
  /* Astro Component that renders the contents of this file */
  Content: any;
  /* Function that returns an array of the h1...h6 elements in this file */
  getHeadings(): Promise<{ depth: number; slug: string; text: string }[]>;
}
