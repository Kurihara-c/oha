// iPhoneタッチ制御
document.addEventListener("touchstart", function () {});

// ヘッダーメニュー開閉
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer-content").removeClass("is-checked");
});

// ギャラリーswiper
const swiper = new Swiper("#js-gallery-swiper", {
  spaceBetween: 70,
  loop: true,

  // If we need pagination
  pagination: {
    el: "#js-gallery-pagination",
  },

  // Navigation arrows
  navigation: {
    prevEl: "#js-gallery-prev",
    nextEl: "#js-gallery-next",
  },
});

// 送信ボタン非活性
$(document).ready(function () {
  const $submitBtn = $("#js-submit");
  $("#form input,#form textarea").on("change", function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="radio"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $("#form #privacy-check").prop("checked") === true
    ) {
      $submitBtn.prop("disabled", false);
      $submitBtn.addClass("c-button--submit-active");
    } else {
      $submitBtn.prop("disabled", true);
      $submitBtn.removeClass("c-button--submit-active");
    }
  });
});

// ページトップボタン
jQuery(window).on("scroll", function () {
  if (100 < jQuery(window).scrollTop()) {
    jQuery("#js-pagetop").addClass("is-show");
  } else {
    jQuery("#js-pagetop").removeClass("is-show");
  }
});

// スムーススクロール
jQuery('a[href^="#"]').on("click", function (e) {
  const speed = 300;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const position = jQuery(target).offset().top;
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing" // swing or linear
  );
});

// セクションタイトルフェードイン
const intersectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in-view");
    } else {
      // entry.target.classList.remove("is-in-view");
    }
  });
});

const inViewItems = document.querySelectorAll(".js-in-view");
inViewItems.forEach(function (inViewItem) {
  intersectionObserver.observe(inViewItem);
});
