(function ($) {
  "use strict";
  /* ======= STICKY MENU ======= */
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $("header").addClass("sticky-menu");
    } else {
      $("header").removeClass("sticky-menu");
    }
  });

  /* ====== SHOW & HIDE MENU ====== */
  $(".menu-show-btn").click(function () {
    $(".menu-area").addClass("show-menu");
  });
  $(".menu-hide-btn").click(function () {
    $(".menu-area").removeClass("show-menu");
  });

  /* ====== MOBILE DROPDOWN MENU ====== */
  $(".menu-link").click(function () {
    $(".sub-menu").toggle();
  });

  /* ====== EDITOR VIDEO ON CLICK CHANGE ====== */
  $(".editor-video-play").on("click", function () {
    $(".editor-video").css({
      "z-index": 1,
      opacity: 1,
    });

    $(".editor-video").trigger("play");
    $(".editor-video-screen").hide();
    $(this).hide();
  });

  $(".editor-video").on("click", function () {
    console.log("a");
  });

  /* ====== FUTURE VIDEO ON CLICK CHANGE ====== */
  $(".future-video-play").on("click", function () {
    $(".future-video").css({
      "z-index": 1,
      opacity: 1,
    });

    $(".future-video").trigger("play");
    $(".future-video-screen").hide();
    $(this).hide();
  });

  $(".future-video").on("click", function () {
    console.log("a");
  });

  /* ====== PRICING SHOW, MORE CONTENT ====== */
  $(".show-more-plans-btn").click(function () {
    $(".show-more-plans-content").toggle();
    if ($(".show-more-plans-btn").text() == "Show more plans") {
      $(this).text("Show fewer plans");
    } else {
      $(this).text("Show more plans");
    }
  });

  /* ============ HERO TYPING TRXT ============= */
  new TypeIt("#heading1", {
    strings: "Start to <span>Automate</span> <br /> our ads.",
    speed: 50,
    waitUntilVisible: true,
  }).go();

  new TypeIt("#desc1", {
    strings:
      "Tool for agencies and brands to improve their creatives from their catalog of products and services for dynamic ads.",
    speed: 50,
    waitUntilVisible: true,
    startDelay: 2500,
  }).go();

  new TypeIt("#heading2", {
    strings: "hello <span>Automate</span> <br /> our ads.",
    speed: 50,
    waitUntilVisible: true,
    startDelay: 10500,
  }).go();

  new TypeIt("#desc2", {
    strings:
      "Tool for agencies and brands to improve their creatives from their catalog of products and services for dynamic ads.",
    speed: 50,
    waitUntilVisible: true,
    startDelay: 12000,
  }).go();
})(jQuery);
