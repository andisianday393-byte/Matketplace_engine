import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDkwoa240JAs99SXkHQ38dVXixNJSqAEaM",
  authDomain: "marketplace-engine-95a71.firebaseapp.com",
  projectId: "marketplace-engine-95a71",
  storageBucket: "marketplace-engine-95a71.firebasestorage.app",
  messagingSenderId: "582129274112",
  appId: "1:582129274112:web:3b75f7a5f17509274cf7e5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);