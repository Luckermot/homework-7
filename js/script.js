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

  //time
  const timeEnd = "2023-02-05";
  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / 100 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = document.querySelector("#days"),
      hours = document.querySelector("#hours"),
      minutes = document.querySelector("#minutes"),
      seconds = document.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.innerHTML = t.days;
      hours.innerHTML = t.hours;
      minutes.innerHTML = t.minutes;
      seconds.innerHTML = t.seconds;
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", timeEnd);

  // Modal

  const modalBtns = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalClose = document.querySelector("[data-close]");

  function hideModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  function showModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
  }

  modalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      showModal();
    });
  });

  modalClose.addEventListener("click", () => {
    hideModal();
  });

  modal.addEventListener("click", (e) => {
    if (e.target == modal) {
      hideModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code == "Escape") {
      hideModal();
    }
  });

  // slides

  const slides = document.querySelectorAll(".offer__slide"),
    slidePrev = document.querySelector(".offer__slider-prev"),
    slideNext = document.querySelector(".offer__slider-next"),
    total = document.querySelector("#total"),
    current = document.querySelector("#current");

  let slideIndex = 1;
  showSlides(slideIndex);

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = slides.length;
  }

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((item) => {
      item.style.display = "none";
    });

    slides[slideIndex - 1].style.display = "block";

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  slidePrev.addEventListener("click", () => {
    plusSlides(-1);
  });

  slideNext.addEventListener("click", () => {
    plusSlides(1);
  });
});
