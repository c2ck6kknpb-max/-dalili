const container = document.getElementById("business-list");
const searchInput = document.querySelector("input");
const searchButton = document.querySelector(".search button");
const noResults = document.getElementById("no-results");

function renderBusinesses(list) {
    container.innerHTML = "";

    if (list.length === 0) {
        noResults.style.display = "block";
        container.appendChild(noResults);
        return;
    }

    noResults.style.display = "none";

list.forEach((item, index) => {
    container.innerHTML += `
            <div class="business-card">
                <img src="${item.image}" alt="${item.name}">
                <div class="business-info">
                    <h3>${item.name}</h3>
                    <p>${item.category} • ${item.city}</p>
                    <span>⭐ ${item.rating}</span>
<a href="business.html?id=${index}" class="details-btn">عرض التفاصيل</a>                </div>
            </div>
        `;
    });
}

function searchBusinesses() {
    const value = searchInput.value.trim().toLowerCase();

    const filtered = businesses.filter(item =>
        item.name.toLowerCase().includes(value) ||
        item.category.toLowerCase().includes(value) ||
        item.city.toLowerCase().includes(value)
    );

    renderBusinesses(filtered);
}

renderBusinesses(businesses);

searchInput.addEventListener("input", searchBusinesses);
searchButton.addEventListener("click", searchBusinesses);
