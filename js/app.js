const btn = document.querySelector(".theme-switch input");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// const theme=localStorage.getItem(document.documentElement);
// if(theme){
//   document.documentElement.classList.add(btn);
// }


btn.addEventListener("click", () => {
  if (prefersDarkScheme.matches) {
    document.documentElement.classList.toggle("light_body");
    localStorage.setItem(theme,'light_body');
    
  } else {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem(theme,'dark');
  }
});



