const menuBars = document.querySelector(".fa-bars");
const menuCross = document.querySelector(".fa-times");
const menuList = document.getElementById("list");

menuBars.addEventListener("click", () => {
  menuList.classList.add("menuOpen");
});

menuCross.addEventListener("click", () => {
    menuList.classList.toggle("menuOpen");
});
