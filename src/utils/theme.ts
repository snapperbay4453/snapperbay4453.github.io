export const allThemeList = [
  'auto',
  'light',
  'dark',
]

export const applyThemeToDOM = () => {
  if (localStorage.theme === 'auto' || (!('theme' in localStorage))) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  } else if(localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else if(localStorage.theme === 'light') {
    document.documentElement.classList.remove('dark')
  }
}

export const changeTheme = (theme: string) => {
  switch(theme) {
    case 'dark':
      localStorage.theme = 'dark';
      break;
    case 'light':
      localStorage.theme = 'light';
      break;
    case 'auto':
    default:
      localStorage.theme = 'auto';
      break;
  }
  applyThemeToDOM();
}

export const getTheme = () => {
  return localStorage.theme;
}
