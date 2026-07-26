import { auth, db } from "./firebase.js";

import {
createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
doc,
setDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


const btn = document.getElementById("registerBtn");


btn.onclick = async ()=>{

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let confirm = document.getElementById("confirmPassword").value;


if(password !== confirm){
alert("كلمة المرور غير متطابقة");
return;
}

try {

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await setDoc(doc(db, "users", userCredential.user.uid), {
    name: name.trim(),
    email: email.trim()
  });

  alert("تم إنشاء الحساب بنجاح");

  location.href = "login.html";

} catch (error) {

  alert(error.code + "\n" + error.message);

}
