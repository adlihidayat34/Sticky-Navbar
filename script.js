window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var sticky = navbar.getBoundingClientRect().top;

  if (sticky <= 0) {
    navbar.classList.add("whileSticky");
  } else {
    navbar.classList.remove("whileSticky");
  }
});
