import Card from '@/components/Card';

interface DirectoryCardInnerProps {
  title: string;
  description?: string;
  imagePath?: string;
  backgroundColorPalette?: string;
  onClick?: string | (() => void);
}

export default function DirectoryCardInner({
  title,
  description,
  imagePath,
  backgroundColorPalette,
  onClick,
}: DirectoryCardInnerProps) {
  return (
    <Card
    onClick={onClick}
    >
      <div class={`
        h-20 w-60 max-w-[80vw]
        sm:h-40
      `}>
        <img
          class={`
            absolute
            -bottom-1 -right-1 h-auto w-14
            sm:-bottom-4 sm:-right-4 sm:h-auto sm:w-28
            object-contain
          `}
          src={imagePath}
        ></img>
        <div class={`
          absolute
          top-0 left-0 w-40 pl-4 pt-2
          sm:top-0 sm:left-0 sm:w-40 sm:pl-4 sm:pt-4
        `}>
          <span
            class='block text-xl sm:text-2xl font-bold'
          >
            {title}
          </span>
          <span
            class='block text-lg sm:text-xl font-bold'
          >
            {description}
          </span>
        </div>
      </div>
    </Card>
  );
}
