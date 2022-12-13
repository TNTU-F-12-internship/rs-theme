window.onscroll = function(){
    let top = window.scrollY;
    console.log('Top: ' + top);
    let header = document.getElementsByTagName('nav');
    if(top > 100){
        header[0].classList.add('image-header');
    } else {
        header[0].classList.remove('image-header');
    }
};
