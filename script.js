document.addEventListener("DOMContentLoaded", function() {
  var hamburger = document.querySelector('.hamburger');
  var menu = document.querySelector('.menu');

  hamburger.onclick = function () {
    menu.classList.toggle('active');
    hamburger.classList.toggle('cheese');};


    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active1");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

  })
