import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", async () => {

    if (!name.value || !email.value || !password.value || !confirmPassword.value) {
        alert("يرجى تعبئة جميع الحقول");
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert("كلمتا المرور غير متطابقتين");
        return;
    }

    try {

        await createUserWithEmailAndPassword(
            auth,
            email.value,
            password.value
        );

        alert("تم إنشاء الحساب بنجاح");

        window.location.href = "login.html";

    } catch (error) {

        alert(error.message);

    }

});
