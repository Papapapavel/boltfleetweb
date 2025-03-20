function scrollToSection() {
    document.getElementById("Kontakt").scrollIntoView({ behavior: "smooth" });
}

function scrollTovideo()
{
    document.getElementById("Taska").scrollIntoView({behavior: "smooth", block: "center"});
}


document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".hamburger").addEventListener("click", function() {
        document.querySelector(".main-nav ul").classList.toggle("active");
    });
});