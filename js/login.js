import { auth } from "./firebase.js";

import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("أدخل البريد الإلكتروني وكلمة المرور");
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);

    alert("تم تسجيل الدخول بنجاح");

    window.location.href = "profile.html";
catch (error) {
  console.error(error);
  alert(error.code + "\n" + error.message);
}
});
