interface ButtonProps {
  children: any;
  onClick?: string | (() => void)
}
export default function Button({ children, onClick }: ButtonProps) {
  if(typeof onClick === 'string') {
    return (
      <a
        class='flex justify-center items-center gap-1 inline-block text-white bg-indigo-500 hover:bg-indigo-400 px-4 py-2 rounded-full'
        href={onClick}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        class='flex justify-center items-center gap-1'
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}
