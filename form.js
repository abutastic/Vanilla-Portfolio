const scriptURL =
  "https://script.google.com/macros/s/AKfycbwHpomgsQeGYRrkE4iUzV092aQXDqBxvYi_xqEMVYJ8IDb6jpN9jWEronOLC8i8pZPs4g/exec";
const form = document.forms["submit-to-google-sheet"];
const formMessage = document.getElementById("msg")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
        formMessage.classList.add("popup")

        setTimeout(() => {
            formMessage.innerHTML = "";
        }, 6000);

        form.reset()
    })
    .catch((error) => console.error("Error!", error.message));
});


