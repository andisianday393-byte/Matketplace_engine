import { auth, db }
from "./firebase.js";

import {
 createUserWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import {
 doc,
 setDoc,
 serverTimestamp
}
from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

document
.getElementById("registerBtn")
.addEventListener("click", registerUser);

async function registerUser(){

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    if(!name || !email || !password){
        alert("Lengkapi semua data");
        return;
    }

    try{

        const userCredential =
        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        const uid =
        userCredential.user.uid;

        await setDoc(
            doc(db,"users",uid),
            {
                name:name,
                email:email,
                role:"customer",
                createdAt:serverTimestamp()
            }
        );

        alert("Pendaftaran berhasil");

        window.location.href =
        "login.html";

    }catch(error){

        alert(error.message);

    }

}