// Theme selection is applied before the stylesheet paints.
(()=>{let theme;try{theme=localStorage.getItem('portfolio-theme')}catch{}if(theme!=='dark'&&theme!=='light')theme=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=theme;})();
