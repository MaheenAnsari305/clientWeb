var firebaseConfig = {
    apiKey: "AIzaSyBeqfnAcFJTy9CPWYNQltKA1yxVabOYMGU",
    authDomain: "grillparty-5850f.firebaseapp.com",
    projectId: "grillparty-5850f",
    storageBucket: "grillparty-5850f.appspot.com",
    messagingSenderId: "646863479605",
    appId: "1:646863479605:web:2b0da20f04f64fca3c627c"
};
var app =firebase.initializeApp(firebaseConfig);

function signup() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (name && email && password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                console.log("User created:", user);
                window.location.href = "grillparty.html";
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log("Error:", errorMessage);
                alert("Error: " + errorMessage);
            });
    } else {
        alert("Please fill in all fields");
    }
}
