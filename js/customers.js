// Customers;

let userNames = document.querySelectorAll(".user  .user-name");
let emails = document.querySelectorAll(".user  .email");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((res) => {
    userNames.forEach((userName, index) => {
      userName.innerText = res[index].name;
    });
    emails.forEach((email, index) => {
      email.innerText = res[index].email;
    });
  });
