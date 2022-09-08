$(document).ready(function() {
    $(".header-burger").click(function(event) {
        $(".header-burger,.header-menu").toggleClass("active");
        $("body").toggleClass("lock");
    });
});

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.7] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation, .header-animation, .description-animation');

for (let elm of elements) {
  observer.observe(elm);
}

