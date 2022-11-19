const btn = document.querySelector(".theme-switch input");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");




btn.addEventListener("click", () => {
  if (prefersDarkScheme.matches) {
    document.documentElement.classList.toggle("light_body");
    return localStorage.setItem(btn,'light_body');
    
  } else {
    document.documentElement.classList.toggle("dark");
    return localStorage.setItem(btn,'dark');
  }
});

const theme=localStorage.getItem(btn);
if(btn){
    body.classList.add(btn);
}


