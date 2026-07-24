const searchInput = document.querySelector("input");
const cards = document.querySelectorAll(".business-card");

searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
