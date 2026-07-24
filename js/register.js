import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("registerBtn");

button.addEventListener("click", async () => {
    try {
        await createUserWithEmailAndPassword(
            auth,
            email.value,
            password.value
        );

        alert("تم إنشاء الحساب بنجاح");
        window.location.href = "login.html";

    } catch (e) {
        alert(e.message);
    }
});
