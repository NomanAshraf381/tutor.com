const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navb .act ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });

};


window.addEventListener("scroll", () => {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("sec-active");
    } else {
      reveals[i].classList.remove("sec-active");
    }
  }
});

tbars.addEventListener("click", () => {
mainnav.classList.toggle("act-show")}); 