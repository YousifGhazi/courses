/* dark/light mode color */

if (localStorage.getItem("colorMode") === null) {
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    document.body.id = "light";
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.id = "dark";
  }
} else {
  document.body.id = localStorage.getItem("colorMode");
}

// nav-bar
let changeModeBtn = document.querySelector(".dark-light");

changeModeBtn.addEventListener("click", changeMode);

function changeMode() {
  if (document.body.id === "dark") {
    document.body.id = "light";
    localStorage.setItem("colorMode", "light");
  } else if (document.body.id === "light") {
    document.body.id = "dark";
    localStorage.setItem("colorMode", "dark");
  }
}

let sectionsBtns = document.querySelectorAll(".sections a  i");

sectionsBtns.forEach((e) => {
  e.addEventListener("click", function () {
    sectionsBtns.forEach((e) => {
      e.classList.remove("ac");
    });
    this.classList.add("ac");
  });
});
