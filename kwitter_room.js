
var firebaseConfig = {
      apiKey: "AIzaSyAKU4ZqVvKyMTCB_-zkoA2I2QSkQJGHJMA",
      authDomain: "let-s-chat-137ff.firebaseapp.com",
      databaseURL: "https://let-s-chat-137ff-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-137ff",
      storageBucket: "let-s-chat-137ff.appspot.com",
      messagingSenderId: "1048393963812",
      appId: "1:1048393963812:web:3660d2835d402b1ac53bb1"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
