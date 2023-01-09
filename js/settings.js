// Settings

let settings = document.querySelectorAll(".setting .val");

settings.forEach((e) => {
  e.addEventListener("click", function () {
    if (this.classList.contains("on")) {
      this.classList.remove("on");
    } else {
      this.classList.add("on");
    }
  });
});
