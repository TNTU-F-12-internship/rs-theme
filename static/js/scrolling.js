// When the user scroll down, header will be fixed on the screen top
// and a "scroll to top" button will be shown
let btnBackToTop = document.getElementById("btnBackToTop");
let footerElement = document.getElementById('footer');
// console.log(`footerElement: ${footerElement}`)
const btnMarginBottom = parseInt(window.getComputedStyle(btnBackToTop).getPropertyValue('bottom'));
// console.log(`btnMarginBottom: ${btnMarginBottom}`)

window.onscroll = function(){
    let top = window.scrollY;
    let header = document.getElementsByTagName('nav');
    // console.log(`top ${top}`)
    if(top > 900){
        // console.log(`if`)
        btnBackToTop.style.display = "block";
        header[0].classList.add('image-header');
    } else if(top > 100){
        // console.log(`else if`)
        header[0].classList.add('image-header');
    } else {
        // console.log(`else`)
        header[0].classList.remove('image-header');
        btnBackToTop.style.display = "none";
    }

    const footStartPos = footerElement.getBoundingClientRect().y;
    // console.log(`footStartPos: ${footStartPos}`)
    // console.log(`innerHeight: ${innerHeight}`)

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
