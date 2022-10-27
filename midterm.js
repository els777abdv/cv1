let moon = document.getElementById('moon');
let text = document.getElementById('text');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    moon.style.left = value * 1.05 + 'px';
    text.style.right = value * 3 + 'px';
})