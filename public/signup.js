var firebaseConfig = {
  apiKey: "AIzaSyDMqhIkck_xWr-fcZ3_vgDVpucM9KHOHI8",
  authDomain: "dartbyiqra-c33b6.firebaseapp.com",
  projectId: "dartbyiqra-c33b6",
  storageBucket: "dartbyiqra-c33b6.firebasestorage.app",
  messagingSenderId: "831096206029",
  appId: "1:831096206029:web:a195936c52bc753b30ef84"
};

var app = firebase.initializeApp(firebaseConfig);


function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    console.log(email.value);
    console.log(password.value);

    firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    
    // ..
  });    
}

