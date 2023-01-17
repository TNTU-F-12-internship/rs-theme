function toggleFunction() {
    let links = document.getElementById("myLinks");
    let open = document.getElementById("site-icon-open");
    let close = document.getElementById("site-icon-close");
    if (links.style.display === "block") {
        links.style.display = "none";
        open.style.display = "block";
        close.style.display = "none";
    } else {
        links.style.display = "block";
        open.style.display = "none";
        close.style.display = "block";
    }
}

function toggleTopFunction() {
    let links = document.getElementById("myLinks");
    let open = document.getElementById("site-icon-open");
    let close = document.getElementById("site-icon-close");
    links.style.display = "block";
    open.style.display = "none";
    close.style.display = "block";
}