import { useEffect, useState } from 'preact/hooks';

import IconButton from "@/components/IconButton";

export default function PageScrollerInner() {
  const [open, setOpen] = useState<boolean>(false);
  const [direction, setDirection] = useState<string>('top');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleClick = () => {
    switch(direction) {
      case 'top':
        scrollToTop();
        break;
      case 'bottom':
        scrollToBottom();
        break;
      default:
        break;
    };
  };

  const handleScroll = () => {
    setOpen((window.scrollY > 10));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div class={`${open ? '' : 'hidden'}`}>
      <IconButton
        onClick={() => handleClick()}
      >
        {(() => {
          switch(direction) {
            case 'top':
              return (
                <i class='icon-[material-symbols--keyboard-arrow-up-rounded] text-zinc-100'></i>
              );
            case 'bottom':
              return (
                <i class='icon-[material-symbols--keyboard-arrow-down-rounded] text-zinc-100'></i>
              );
            default:
              return (
                <i class='icon-[material-symbols--fiber-manual-record-outline] text-zinc-100'></i>
              );
          }
        })()}
      </IconButton>
    </div>
  );
}
