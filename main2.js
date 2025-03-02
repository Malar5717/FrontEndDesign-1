document.getElementById('ham-menu').addEventListener('click', function() {
    var nav = document.getElementById('nav-links');
    nav.classList.add('active');
});

var navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        var nav = document.getElementById('nav-links');
        nav.classList.remove('active');
    });
})

document.addEventListener('scroll', function() {
    var nav = document.getElementById('nav-links');
    nav.classList.remove('active');
});
// document.addEventListener('click', function() {
//     var nav = document.getElementById('nav-links');
//     nav.classList.remove('active');
// });  outside ham-menu?