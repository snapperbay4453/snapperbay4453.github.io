import HomeIcon from '~icons/material-symbols/home';

export interface IconifyIcon {
  pack: string;
  name: string;
}
interface IconProps {
  icon: IconifyIcon;
  onClick?: string | (() => void)
}
export default function Icon({ icon, onClick }: IconProps) {
  const renderIcon = (icon: IconifyIcon) => {
    switch(`${icon.pack}:${icon.name}`) {
      case 'material-symbols:home': return <HomeIcon />;
      default: return <HomeIcon />;
    }
  }

  if(typeof onClick === 'string') {
    return (
      <a
        class='flex justify-center items-center gap-1 text-white bg-indigo-500 hover:bg-indigo-400 px-4 py-4 rounded-full text-2xl'
        href={onClick}
      >
        {renderIcon({ pack: 'material-symbols', name: 'home' })}
      </a>
    );
  } else {
    return (
      <button
        class='flex justify-center items-center gap-1 text-white bg-indigo-500 hover:bg-indigo-400 px-2 py-2 rounded-full text-2xl'
        onClick={onClick}
      >
        {renderIcon({ pack: 'material-symbols', name: 'home' })}
      </button>
    );
  }
}
