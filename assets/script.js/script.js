$(document).ready(function () {
  $(window).on("scroll", function () {
    // Check the vertical scroll position
    if ($(this).scrollTop() > 100) {
      $("header").addClass("menu_scroll");
    } else {
      $("header").removeClass("menu_scroll");
    }
  });
});

$(document).ready(function () {
  $(".humbarger_icon").click(function () {
    $("nav").slideToggle();
  });
});

$(document).ready(function () {
  const $checkbox = $(".switch3 input");
  const isChecked = localStorage.getItem("switch3Checked") === "true";

  // Set the checkbox state based on localStorage
  $checkbox.prop("checked", isChecked);

  // Add/remove classes based on initial checkbox state
  if (isChecked) {
    $checkbox.parent().addClass("switch3-checked");
    $("body").addClass("dark_mode");
  } else {
    $checkbox.parent().removeClass("switch3-checked");
    $("body").removeClass("dark_mode");
  }

  // Listen for changes on the checkbox
  $checkbox.on("change", function () {
    var dad = $(this).parent();
    if ($(this).is(":checked")) {
      dad.addClass("switch3-checked");
      $("body").addClass("dark_mode");
      localStorage.setItem("switch3Checked", "true");
    } else {
      dad.removeClass("switch3-checked");
      $("body").removeClass("dark_mode");
      localStorage.setItem("switch3Checked", "false");
    }
  });
});

// menu start

$(document).ready(function () {
  function setMenuBehavior() {
    if ($(window).width() < 991) {
      $(".menu li").off("mouseenter mouseleave");

      $(".menu li")
        .off("click")
        .on("click", function () {
          console.log("Menu item clicked");
          // $(".menu li .dropdown_menu").removeClass("open");
          $(this).find(".dropdown_menu").toggleClass("open");
          console.log($(this).find(".dropdown_menu").attr("class"));
        });

      $(".other_pages")
        .off("click")
        .on("click", function (e) {
          e.stopPropagation();
          console.log("Other pages clicked");
          // $(".dropdown_sub_menu").removeClass('show_sub_menu');
          $(this).find(".dropdown_sub_menu").toggleClass("show_sub_menu");
          // $(this).closest("li").find(".dropdown_menu").toggleClass("open");
          console.log($(this).find(".dropdown_sub_menu").attr("class"));
        });
    } else {
      $(".menu li").off("click");

      $(".menu li")
        .off("mouseenter mouseleave")
        .hover(
          function () {
            console.log("Menu item hovered");
            // $(".menu li .dropdown_menu").removeClass("open");
            $(this).find(".dropdown_menu").toggleClass("open");
          },
          function () {
            console.log("Menu item hover out");
            $(this).find(".dropdown_menu").removeClass("open");
          }
        );

      $(".other_pages")
        .off("click")
        .on("click", function (e) {
          e.stopPropagation();
          console.log("Other pages clicked in hover mode");
          // $(".dropdown_sub_menu").removeClass('show_sub_menu');
          $(this).find(".dropdown_sub_menu").toggleClass("show_sub_menu");
          $(this).closest("li").find(".dropdown_menu").toggleClass("open");
          console.log($(this).find(".dropdown_sub_menu").attr("class"));
        });
    }
  }

  // Run on page load
  setMenuBehavior();

  // Run when window is resized
  $(window).resize(function () {
    setMenuBehavior();
  });
});

// menu

$(document).ready(function () {
  // Hover effect for the entire .box element
  $(".box").hover(
    function () {
      $(this)
        .find(".slider_img img")
        .css({ filter: "none", opacity: "0.2" });
    },
    function () {
      $(this)
        .find(".slider_img img")
        .css({
          filter: "grayscale(100%)",
          opacity: "1",
        });
    }
  );

  // Hover effect specifically for .slider_text within the .box
  $(".work_slider_box .box .wrap .slider_text").hover(
    function () {
      $(this)
        .siblings(".slider_img")
        .find("img")
        .css({ filter: "none", opacity: "0.2" });
    },
    function () {
      $(this).siblings(".slider_img").find("img").css({ filter: "none" });
    }
  );
});

// Function to add 'active' class to spans in the element
function animateSpans(element) {
  let spanTimeCount = 0;
  const spans = element.querySelectorAll("span");
  spans.forEach((span) => {
    spanTimeCount += 1;
    setTimeout(() => {
      span.classList.add("active");
    }, 50 * spanTimeCount);
  });
}

// Callback for IntersectionObserver
function handleIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Start animation when the element is in the viewport
      animateSpans(entry.target);
      // Optionally, you can unobserve the element to prevent repeated animations
      observer.unobserve(entry.target);
    }
  });
}

// Create an IntersectionObserver instance
const observer = new IntersectionObserver(handleIntersect, { threshold: 0.1 });

// Select all section-title and section-prefix elements
const sectionTitles = document.querySelectorAll(".section-title");
const sectionPrefixes = document.querySelectorAll(".section-prefix");

// Observe each element
sectionTitles.forEach((element) => observer.observe(element));
sectionPrefixes.forEach((element) => observer.observe(element));

//Scroll back to top

(function ($) {
  "use strict";

  $(document).ready(function () {
    "use strict";

    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  });
})(jQuery);

$(document).ready(function () {
  function setImageStyle() {
    if ($(window).width() < 701) {
      $(".events_img_box").each(function () {
        if (isInViewport($(this))) {
          $(this).find(".events_img img").css({
            opacity: "1",
            transform: "scale(1)",
            transition: "all 0.5s",
            "transition-delay": "0.5s",
          });
        } else {
          $(this).find(".events_img img").css({
            opacity: "5", // Or any other default opacity
            transform: "scale(0)", // Or any other default scale
          });
        }
      });
    }
  }

  // Function to check if the element is in the viewport
  function isInViewport(element) {
    var elementTop = element.offset().top;
    var elementBottom = elementTop + element.outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  // Run on page load
  setImageStyle();

  // Run when window is resized
  $(window).resize(function () {
    setImageStyle();
  });

  // Run when the page is scrolled
  $(window).scroll(function () {
    setImageStyle();
  });
});

// kdf





