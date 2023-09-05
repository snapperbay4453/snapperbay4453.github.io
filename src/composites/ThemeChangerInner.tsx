import { useEffect, useState } from 'preact/hooks';

import IconButton from "@/components/IconButton";
import { allThemeList, getTheme, changeTheme } from '@/utils/theme';

export default function ThemeChangerInner() {
  const [theme, setTheme] = useState(getTheme());

  const circulateTheme = () => {
    const themeIndex = Math.max(allThemeList.findIndex(item => item === theme), 0);
    const nextTheme = allThemeList[(themeIndex + 1) % allThemeList.length];
    setTheme(nextTheme);
    changeTheme(nextTheme);
  }

  useEffect(() => {
    const initialTheme = getTheme();
    setTheme(initialTheme);
    changeTheme(initialTheme);
  }, []);

  return (
    <IconButton
      onClick={() => circulateTheme()}
    >
      {theme === 'auto' && (
        <i class='icon-[material-symbols--night-sight-auto-outline-rounded] text-inherit'></i>
      )}
      {theme === 'light' && (
        <i class='icon-[material-symbols--sunny-outline-rounded] text-inherit'></i>
      )}
      {theme === 'dark' && (
        <i class='icon-[material-symbols--mode-night-outline-rounded] text-inherit'></i>
      )}
    </IconButton>
  );
}
