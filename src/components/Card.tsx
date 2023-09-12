interface CardProps {
  children: any;
  onClick?: string | (() => void)
}
export default function Card({
  children,
  onClick,
}: CardProps) {
  const renderCard = () => {
    return (
      <div
        class={`
          relative border-2 border-zinc-200 dark:border-zinc-800 rounded-3xl
          hover:bg-zinc-200 dark:hover:bg-zinc-800
          cursor-pointer
          overflow-hidden
        `}
      >
        {children}
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
