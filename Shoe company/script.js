document.addEventListener("DOMContentLoaded", function() {
    var imgSrc = document.getElementById('back-img').src;
    const backImg = document.querySelector('.back-img')
    backImg.style.backgroundImage = 'url(' + imgSrc + ')'
    
});
