import Chip from '@/components/Chip'
import type { ArticleTagBarItem } from './ArticleTagBar.astro'

interface ArticleTagBarInnerProps {
  tags: ArticleTagBarItem[];
}

export default function ArticleTagBarInner({
  tags = [],
}: ArticleTagBarInnerProps) {
  return (
    <div
      class='flex gap-2 flex-wrap'
    >
      {tags.map(tag => (
        <Chip
          label={`#${tag.label}`}
          onClick={tag.onClick}
        />
      ))}
    </div>
  );
}
