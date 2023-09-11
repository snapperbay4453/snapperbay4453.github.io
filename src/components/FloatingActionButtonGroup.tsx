import { useRef, useState } from 'preact/hooks';
import useClickOutside from '@/hooks/useClickOutside'

import IconButton from '@/components/IconButton';

interface FloatingActionButtonGroupProps {
  children: any;
}
export default function FloatingActionButtonGroup({
  children
}: FloatingActionButtonGroupProps) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(prevState => !prevState);
  }

  const handleClickOutsideFloatingActionButtonGroup = () => {
    setOpen(false);
  }

  const floatingActionButtonGroupRef = useRef();
  
  useClickOutside(floatingActionButtonGroupRef, handleClickOutsideFloatingActionButtonGroup);

  return (
    <div
      class='relative flex flex-col-reverse gap-4 z-40'
      ref={floatingActionButtonGroupRef}
    >
      <div class={`
        absolute bottom-[calc(115%)] ${open ? 'opacity-100 ' : 'hidden'}
        transition-opacity
      `}>
        {children}
      </div>
      <IconButton
        onClick={toggleOpen}
      >
        <i
          class={
            !open
            ? 'icon-[material-symbols--more-vert] text-zinc-100'
            : 'icon-[material-symbols--close-rounded] text-zinc-100'
          }
        ></i>
      </IconButton>
    </div>
  );
}
