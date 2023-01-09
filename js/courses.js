// Courses
let cardsName = document.querySelectorAll(".cards  .card > h4");
let CoursesSearch = document.querySelector(".search .search-input");
let notFound = document.querySelector(".not-found");

CoursesSearch.addEventListener("input", function () {
  let val = this.value;
  if (val === "") {
    cardsName.forEach((card) => {
      card.parentElement.classList.remove("hide");
    });
  }

  cardsName.forEach((card) => {
    if (!card.innerText.toLowerCase().includes(val)) {
      card.parentElement.classList.add("hide");
    } else {
      card.parentElement.classList.remove("hide");
    }
  });

  let hiddenCard = document.querySelectorAll(".cards  .card.hide");
  if (hiddenCard.length === cardsName.length) {
    notFound.classList.add("show");
  } else {
    notFound.classList.remove("show");
  }
});
