import { auth, db } from "./firebase.js";

import {
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
doc,
getDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


onAuthStateChanged(auth, async(user)=>{

if(user){

document.getElementById("email").textContent = user.email;


let data = await getDoc(
doc(db,"users",user.uid)
);


if(data.exists()){

document.getElementById("name").textContent =
data.data().name;

}


}else{

location.href="login.html";

}

});
document.getElementById("logoutBtn").onclick = async () => {
  await signOut(auth);
  location.href = "login.html";
};
