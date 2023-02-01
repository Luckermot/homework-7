window.addEventListener("DOMContentLoaded", () => {
  const tabFather = document.querySelector(".tabheader"),
    tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent");

  function hideContent() {
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });

    tabsContent.forEach((item) => {
      item.style.display = "none";
    });
  }

  function showContent(i = 0) {
    tabs[i].classList.add("tabheader__item_active");
    tabsContent[i].style.display = "block";
  }

  hideContent();
  showContent();

  tabFather.addEventListener("click", (e) => {
    if (e.target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (item == e.target) {
          hideContent();
          showContent(i);
        }
      });
    }
  });
});
