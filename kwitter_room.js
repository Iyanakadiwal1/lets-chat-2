
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBRvszXuvJSg4R0Y3s7uh0p_7dl9MZNLBc",
      authDomain: "kwitter-69b2b.firebaseapp.com",
      databaseURL: "https://kwitter-69b2b-default-rtdb.firebaseio.com",
      projectId: "kwitter-69b2b",
      storageBucket: "kwitter-69b2b.appspot.com",
      messagingSenderId: "284184817795",
      appId: "1:284184817795:web:7f5085c30ad98bb3b5ebb6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
