import { useEffect, useState } from 'preact/hooks';

import IconButton from "@/components/IconButton";
import { detectBrowser } from '@/utils/env'
import { allThemeList, getTheme, changeTheme } from '@/utils/theme';

export default function ThemeChangerInner() {
  const [rendered, setRendered] = useState(false);
  const [theme, setTheme] = useState(getTheme());
  const [browserName, setBrowserName] = useState('Unknown');

  const circulateTheme = () => {
    const themeIndex = Math.max(allThemeList.findIndex(item => item === theme), 0);
    const nextTheme = allThemeList[(themeIndex + 1) % allThemeList.length];
    setTheme(nextTheme);
    changeTheme(nextTheme);
  }

  useEffect(() => {
    const browserName = detectBrowser();
    setBrowserName(browserName);

    const initialTheme = getTheme();
    setTheme(initialTheme);
    changeTheme(initialTheme);

    setRendered(true);
  }, []);

  return (
    <>
      {(rendered) && (browserName !== 'Samsung') && (
        <IconButton
          onClick={() => circulateTheme()}
        >
          {(() => {
            switch(theme) {
              case 'auto':
                return (
                  <i class='icon-[material-symbols--night-sight-auto-outline-rounded] bg-zinc-100'></i>
                );
              case 'light':
                return (
                  <i class='icon-[material-symbols--sunny-outline-rounded] bg-zinc-100'></i>
                );
              case 'dark':
                return (
                  <i class='icon-[material-symbols--mode-night-outline-rounded] bg-zinc-100'></i>
                );
              default:
                return (
                  <i class='icon-[material-symbols--fiber-manual-record-outline] bg-zinc-100'></i>
                );
            }
          })()}
        </IconButton>
      )}
    </>
  );
}
