let lake = document.getElementById("lake");
let moon = document.getElementById("moon");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    lake.style.top = value * 0.5 + 'px';
    moon.style.right = value * 0.35 + 'px';
})