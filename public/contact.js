var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
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

