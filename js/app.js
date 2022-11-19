const btn = document.querySelector(".theme-switch input");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// const theme=localStorage.getItem('theme');
// if(theme){
//     body.classList.add(theme);
// }


btn.addEventListener("click", () => {
  if (prefersDarkScheme.matches) {
    document.documentElement.classList.toggle("light_body");
    // return localStorage.setItem('theme','light_body');
    
  } else {
    document.documentElement.classList.toggle("dark");
    // return localStorage.setItem('theme','dark');
  }
});



