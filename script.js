/* TABS SECTION LOGIC */

const tabs = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {

    // First removing the stuff
    tabContents.forEach((content) => {
      content.classList.remove("active-tab");
    });

    tabs.forEach((tab) => {
      tab.classList.remove("active-link");
    });

    //Second Adding the stuff
    tabs[index].classList.add('active-link')

    tabContents[index].classList.add('active-tab')

  });
});


