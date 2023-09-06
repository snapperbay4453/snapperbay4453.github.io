interface IconButtonProps {
  children: any;
  onClick?: string | (() => void);
}
export default function IconButton({ children, onClick }: IconButtonProps) {
  if(typeof onClick === 'string') {
    return (
      <a
        class='flex justify-center items-center gap-1 text-white bg-indigo-500 hover:bg-indigo-400 px-4 py-4 rounded-full text-2xl'
        href={onClick}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        class='flex justify-center items-center gap-1 text-white bg-indigo-500 hover:bg-indigo-400 px-2 py-2 rounded-full text-2xl'
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}
