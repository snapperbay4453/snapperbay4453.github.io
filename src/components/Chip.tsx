interface ChipProps {
  label: string;
  onClick?: string | (() => void)
}
export default function Chip({ label, onClick }: ChipProps) {
  if(typeof onClick === 'string') {
    return (
      <a
        class='flex justify-center items-center gap-1 text-sm text-white bg-zinc-500 hover:bg-zinc-400 px-3 py-1 rounded-full'
        href={onClick}
      >
        {label}
      </a>
    );
  } else {
    return (
      <button
        class='flex justify-center items-center gap-1 text-sm text-white bg-zinc-500 hover:bg-zinc-400 px-3 py-1 rounded-full'
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
}
