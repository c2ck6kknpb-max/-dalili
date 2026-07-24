const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

function searchBusinesses() {
    const value = searchInput.value.trim().toLowerCase();

    const cards = document.querySelectorAll(".card, .business-card");

    let found = 0;

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();

        if (value === "" || text.includes(value)) {
            card.style.display = "";
            found++;
        } else {
            card.style.display = "none";
        }
    });

    const noResults = document.getElementById("no-results");
    if (noResults) {
        noResults.style.display = (found === 0 && value !== "") ? "block" : "none";
    }
}

searchInput.addEventListener("input", searchBusinesses);
searchButton.addEventListener("click", searchBusinesses);

searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        searchBusinesses();
    }
});
