import $ from "jquery";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const handleClickScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export function doAnimations(elements) {
  var animationEndEvents =
    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
  elements.each(function () {
    var $this = $(this);
    var $animationDelay = $this.data("delay");
    var $animationType = "animated " + $this.data("animation");
    $this.css({
      "animation-delay": $animationDelay,
      "-webkit-animation-delay": $animationDelay,
    });
    $this.addClass($animationType).one(animationEndEvents, function () {
      $this.removeClass($animationType);
    });
  });
}
