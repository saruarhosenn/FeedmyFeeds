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
    tablinks[i].className = tablinks[i].className.replace(" actives", "");
  }
  document.getElementById(PricingTabName).style.display = "block";
  evt.currentTarget.className += " actives";
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

/*========== PRICING BUTTON ACTIVE STYLE =========*/
// Get the container element
var btnContainer = document.getElementById("myDIV");
// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("pricing-btn-parrent");
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

/* ====== PRICING SHOW, MORE CONTENT ====== */
var showMoreContent = document.querySelectorAll(".show-more-plans-content");
var showText = document.getElementById("show-more-plans");
showText.addEventListener("click", () => {
  showText.classList.toggle("showing-less");
  showMoreContent.forEach((card) => {
    if (showText.classList.contains("showing-less")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    };
  });
});

/* ============ HERO TYPING TRXT ============= */
var typeText = document.querySelector(".typeText");
var textToBeTypedArr = ["Automate", "Disrupt", "Take Off"];
var index = 0,
  isAdding = true,
  textToBeTypedIndex = 0;

function playAnim() {
  setTimeout(
    function () {
      // set the text of typeText to a substring of the text to be typed using index.
      typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index);
      if (isAdding) {
        // adding text
        if (index > textToBeTypedArr[textToBeTypedIndex].length) {
          // no more text to add
          isAdding = false;
          //break: wait 2s before playing again
          setTimeout(function () {
            playAnim();
          }, 1000);
          return;
        } else {
          // increment index by 1
          index++;
        }
      } else {
        // removing text
        if (index === 0) {
          // no more text to remove
          isAdding = true;
          //switch to next text in text array
          textToBeTypedIndex =
            (textToBeTypedIndex + 1) % textToBeTypedArr.length;
        } else {
          // decrement index by 1
          index--;
        }
      }
      // call itself
      playAnim();
    },
    isAdding ? 120 : 60
  );
}
// start animation
playAnim();

var h = document.documentElement,
  b = document.body,
  st = "scrollTop",
  sh = "scrollHeight",
  progress = document.querySelector(".progress"),
  scroll;

document.addEventListener("scroll", function () {
  scroll = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  progress.style.setProperty("--scroll", scroll + "%");
});


/* ============ AGENCY RANGE SLIDER ============= */
let slider = document.getElementById("agency-slider");
let fill = document.querySelector(".agency-bar .agency-fill");
function fillw() {
  fill.style.width = slider.value + "%";
}
slider.addEventListener("input", fillw);
fillw();
