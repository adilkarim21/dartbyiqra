var firebaseConfig = {
    apiKey: "AIzaSyDMqhIkck_xWr-fcZ3_vgDVpucM9KHOHI8",
    authDomain: "dartbyiqra-c33b6.firebaseapp.com",
    databaseURL: "https://dartbyiqra-c33b6-default-rtdb.firebaseio.com",
    projectId: "dartbyiqra-c33b6",
    storageBucket: "dartbyiqra-c33b6.firebasestorage.app",
    messagingSenderId: "831096206029",
    appId: "1:831096206029:web:a195936c52bc753b30ef84"
};
  
var app = firebase.initializeApp(firebaseConfig);


function sendComment() {
    
        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var phonenumber = document.getElementById('phonenumber');
        var comment = document.getElementById('comment');
    
        console.log(name.value);
        console.log(email.value);
        console.log(phonenumber.value);
        console.log(comment.value);    

        if (name.value && email.value && phonenumber.value && comment.value) {

            var userObj = {
                userName: name.value,
                userEmail: email.value,
                userPhonenumber: phonenumber.value,
                userComment: comment.value,
            };
    
            firebase.database().ref('users').push(userObj);
    
            alert('Saved');

        }

        else {

            alert("Enter the fileds");
            
        }
        
}

