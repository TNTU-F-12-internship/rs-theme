// When the user scroll down, header will be fixed on the screen top
// and a "scroll to top" button will be shown
let btnBackToTop = document.getElementById("btnBackToTop");
let footerElement = document.getElementById('footer');
const btnMarginBottom = parseInt(window.getComputedStyle(btnBackToTop).getPropertyValue('bottom'));
let home = document.getElementById('small-menu');

window.onscroll = function(){
    let top = window.scrollY;
    let header = document.getElementsByTagName('nav');
    if(top > 900){
        btnBackToTop.style.display = "block";
        header[0].classList.add('image-header');
    } else if(top > 100){
        header[0].classList.add('image-header');
        home.style.display = "block";
    } else {
        header[0].classList.remove('image-header');
        btnBackToTop.style.display = "none";
        home.style.display = "none";
    }

    const footStartPos = footerElement.getBoundingClientRect().y;
    if (window.innerHeight > (footStartPos + btnMarginBottom)) {
        btnBackToTop.style.bottom = `${(window.innerHeight - footStartPos)}px`;
    } else {
        btnBackToTop.style.bottom = '';
    }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
