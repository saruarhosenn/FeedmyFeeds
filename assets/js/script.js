/* ======== Hero Sider ======== */
var swiper = new Swiper(".hero-slider", {
  spaceBetween: 0,
  speed: 1200,
  effect: "fade",
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
});

/* ======== Filter Sider ======== */
var swiper = new Swiper(".filter-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 3,
    slideShadows: true,
  },
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-next-btn",
    prevEl: ".swiper-prev-btn",
  },
});

/* ======== PRICING MAIN TAB ======== */
function openPricingTab(evt, PricingTabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("pricing-tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("pricing-tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(PricingTabName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/*========== ACCORDION ==========*/
const items = document.querySelectorAll(".faq-accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

/* ===== SCROLL BACK TO TOP BTN ===== */
var mybutton = document.getElementById("scroll-up-btn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}
mybutton.addEventListener("click", topFunction);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
