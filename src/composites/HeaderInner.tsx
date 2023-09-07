import WidthLimiter from '@/components/WidthLimiter';

export default function HeaderInner() {
  return (
    <nav class='sticky top-0 mx-auto bg-zinc-100/70 dark:bg-zinc-900/70 backdrop-blur z-40'>
      <WidthLimiter>
        <div class='flex items-center justify-between relative h-12'>
          <span><a href='/home'>snapperbay4453</a></span>
          <div class='flex items-center gap-4'>
            <a href='/directories'>Posts</a>
            <a href='/about'>About</a>
          </div>
        </div>
      </WidthLimiter>
    </nav>
  );
}
