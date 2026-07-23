// ===== DALILI APP =====

console.log("Dalili Started");

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";
        navbar.style.background = "#ffffff";
    } else {
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";
    }
});

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-12px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});
