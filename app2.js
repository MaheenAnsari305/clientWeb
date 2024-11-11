var firebaseConfig = {
    apiKey: "AIzaSyBeqfnAcFJTy9CPWYNQltKA1yxVabOYMGU",
    authDomain: "grillparty-5850f.firebaseapp.com",
    databaseURL: "https://grillparty-5850f-default-rtdb.firebaseio.com",
    projectId: "grillparty-5850f",
    storageBucket: "grillparty-5850f.firebasestorage.app",
    messagingSenderId: "646863479605",
    appId: "1:646863479605:web:2b0da20f04f64fca3c627c"
  };
  
  var app = firebase.initializeApp(firebaseConfig);
    var db = firebase.database();
    function saveData(event) {
  
    
  
  
      event.preventDefault();
  
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var message = document.getElementById("message").value;
  
      if(!name || !email || !password || !message){
          alert("All fields are required");
          return;
      }
  var userObj = {
      userName : name,
     userEmail :email,
   userPassword : password,
   userMessage : message 
  };
  db.ref("users").push(userObj)
  .then(() => {
      console.log("message sent succesfully");
      document.getElementById("contact-Form").reset();
      
  })
  .catch((error) => {
      console.error("Error saving data: ", error);
      alert("Error sending message");
  });
}