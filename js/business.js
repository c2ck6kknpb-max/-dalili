// ===== Dalili Business Page =====

// رقم الهاتف (عدله حسب النشاط)
const phoneNumber = "+963999999999";

// رقم واتساب (بدون + أو مسافات)
const whatsappNumber = "963999999999";

// زر الاتصال
const callBtn = document.querySelector(".call-btn");
if (callBtn) {
  callBtn.href = `tel:${phoneNumber}`;
}

// زر واتساب
const whatsappBtn = document.querySelector(".whatsapp-btn");
if (whatsappBtn) {
  whatsappBtn.href = `https://wa.me/${whatsappNumber}`;
  whatsappBtn.target = "_blank";
}

// زر المفضلة
const favoriteBtn = document.querySelector(".favorite-btn");

if (favoriteBtn) {
  favoriteBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (favoriteBtn.classList.contains("active")) {
      favoriteBtn.classList.remove("active");
      favoriteBtn.textContent = "❤️ إضافة للمفضلة";
    } else {
      favoriteBtn.classList.add("active");
      favoriteBtn.textContent = "💖 تمت الإضافة";
    }
  });
}
