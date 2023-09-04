import WidthLimiter from '@/components/WidthLimiter';

export default function ArticleSearchBarInner() {
  return (
    <nav class='sticky top-0 mx-auto bg-white/70 dark:bg-black/70 backdrop-blur'>
      <WidthLimiter>
        <div class='flex items-center justify-between relative h-12'>
          <span><a href='/home'>snapperbay4453</a></span>
          <div class='flex gap-4'>
            <a href='/directories'>Posts</a>
            <a href='/about'>About</a>
          </div>
        </div>
      </WidthLimiter>
    </nav>
  );
}
