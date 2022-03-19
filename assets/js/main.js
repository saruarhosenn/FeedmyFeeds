$(document).ready(function(){
  /* ======= STICKY MENU ======= */
  var windows = $(window);
  var sticky = $(".header-sticky");
  windows.on("scroll", function () {
    var scroll = windows.scrollTop();
    if (scroll < 250) {
      sticky.removeClass("stick");
    } else {
      sticky.addClass("stick");
    }
  });

  /* ====== SHOW & HIDE MENU ====== */
  $(".menu-show-btn").click(function () {
    $(".menu-area").addClass("show-menu");
  });
  $(".menu-hide-btn").click(function () {
    $(".menu-area").removeClass("show-menu");
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

  /* ======== LANGUEGE SELECT ========= */
  $(".languege-select").niceSelect();
});
