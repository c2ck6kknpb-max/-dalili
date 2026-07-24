const searchInput = document.querySelector("input");
const searchButton = document.querySelector(".search button");
const noResults = document.getElementById("no-results");

function searchBusinesses() {
    const value = searchInput.value.trim().toLowerCase();

    const items = document.querySelectorAll(".business-card, .card");

    let found = 0;

    items.forEach(item => {
        const text = item.textContent.toLowerCase();

        if (value === "" || text.includes(value)) {
            item.style.display = "";
            found++;
        } else {
            item.style.display = "none";
        }
    });

    if (found === 0 && value !== "") {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}

searchInput.addEventListener("input", searchBusinesses);
searchButton.addEventListener("click", searchBusinesses);

searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        searchBusinesses();
    }
});
