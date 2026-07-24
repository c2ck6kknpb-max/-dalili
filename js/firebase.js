import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDuwbk-nKSWJ6o-UuChpP2OqBPWapgyAPg",
  authDomain: "dalili-f0210.firebaseapp.com",
  projectId: "dalili-f0210",
  storageBucket: "dalili-f0210.firebasestorage.app",
  messagingSenderId: "761515990277",
  appId: "1:761515990277:web:4b194a4529cdba1e25eb6c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
