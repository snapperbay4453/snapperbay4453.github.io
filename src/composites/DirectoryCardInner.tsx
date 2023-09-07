interface DirectoryCardInnerProps {
  title: string;
  description?: string;
  imagePath?: string;
  backgroundColorPalette?: string;
  onClick?: string | (() => void)
}

export default function DirectoryCardInner({
  title,
  description,
  imagePath,
  backgroundColorPalette,
  onClick,
}: DirectoryCardInnerProps) {
  const renderCard = () => {
    return (
      <div class='relative border-2 border-zinc-200 dark:border-zinc-800 rounded-3xl hover:bg-zinc-200 dark:hover:bg-zinc-800 h-40 w-60 max-w-[80vw] overflow-hidden'>
        <div class='absolute top-0 left-0 right-0 px-4 pt-4 pb-2 bg-zinc-200/0 dark:bg-zinc-200/0 backdrop-blur z-20'>
          <span
            class='block text-2xl font-bold'
          >
            {title}
          </span>
          <span
            class='block text-xl font-bold'
          >
            {description}
          </span>
        </div>
        <img
          class='absolute -bottom-4 -right-4 h-auto w-28 object-contain'
          src={imagePath}
        ></img>
      </div>
    );
  }

  if(typeof onClick === 'string') {
    return (
      <a
        class='block'
        href={onClick}
      >
        {renderCard()}
      </a>
    );
  } else {
    return (
      <button
        class='block'
        onClick={onClick}
      >
        {renderCard()}
      </button>
    );
  }
}
