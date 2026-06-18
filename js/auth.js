import { auth }
from "./firebase.js";

import {
 signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const loginBtn =
document.getElementById("loginBtn");

loginBtn.addEventListener(
 "click",
 loginEmail
);

async function loginEmail(){

 const email =
 document.getElementById("email").value;

 const password =
 document.getElementById("password").value;

 try{

   await signInWithEmailAndPassword(
      auth,
      email,
      password
   );

   alert("Login Berhasil");

 }catch(error){

   alert(error.message);

 }

}
