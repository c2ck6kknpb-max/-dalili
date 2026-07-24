const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const business = businesses[id];

if (business) {
    document.querySelector("h1").textContent = business.name;
    document.querySelector(".overlay p").textContent =
        `⭐ ${business.rating}`;

    document.querySelector(".business-hero img").src =
        business.image;

    document.querySelector(".business-main p").textContent =
        `${business.category} في ${business.city}`;
}
