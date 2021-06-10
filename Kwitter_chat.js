// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAJ5LnH4QqXgWJg-1Gxor2nneEfmNbxQBc",
    authDomain: "kwitterhomework-11e50.firebaseapp.com",
    databaseURL: "https://kwitterhomework-11e50-default-rtdb.firebaseio.com",
    projectId: "kwitterhomework-11e50",
    storageBucket: "kwitterhomework-11e50.appspot.com",
    messagingSenderId: "784368383583",
    appId: "1:784368383583:web:9d3cbb8d67e76ce1378dea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//dont make any changes

var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}