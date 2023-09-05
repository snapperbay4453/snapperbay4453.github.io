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
