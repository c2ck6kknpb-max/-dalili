console.log("login.js يعمل");
import { auth } from "./firebase.js";

import 
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


document.getElementById("loginBtn").onclick = async()=>{


let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;



try{


await signInWithEmailAndPassword(
auth,
email,
password
);


alert("تم تسجيل الدخول");


location.href="profile.html";



}catch(error){

alert("البريد أو كلمة المرور غير صحيحة");

}


};
