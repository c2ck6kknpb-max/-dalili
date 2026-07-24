const searchInput = document.querySelector('input');
const searchButton = document.querySelector('.search button');

function searchBusinesses() {
    const value = searchInput.value.trim().toLowerCase();

    const items = document.querySelectorAll(
        '.business-card, .card'
    );

    items.forEach(item => {
        const text = item.textContent.toLowerCase();

        if (value === "" || text.includes(value)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}

// البحث أثناء الكتابة
searchInput.addEventListener("input", searchBusinesses);

// البحث عند الضغط على الزر
searchButton.addEventListener("click", searchBusinesses);

// البحث عند الضغط على Enter
searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        searchBusinesses();
    }
});
