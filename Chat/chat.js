//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBJyoONqyF6wkBq-knJCEp2h6u0_S0bpvY",
      authDomain: "kwitter-d0fc5.firebaseapp.com",
      projectId: "kwitter-d0fc5",
      storageBucket: "kwitter-d0fc5.appspot.com",
      messagingSenderId: "584294102982",
      appId: "1:584294102982:web:614a6efe041d33c1c624c7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  
                  //End code
            });
      });
}
getData();

function logout() {
      window.location.redirect("../Login/index.html");
}