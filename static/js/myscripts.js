// When the user scroll down, header will be fixed on the screen top
// and a "scroll to top" button will be shown
window.onscroll = function(){
    let top = window.scrollY;
    let header = document.getElementsByTagName('nav');
    let btnBackToTop = document.getElementById("btnBackToTop");
    if(top > 100){
        header[0].classList.add('image-header');
        btnBackToTop.style.display = "block";
    } else {
        header[0].classList.remove('image-header');
        btnBackToTop.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}