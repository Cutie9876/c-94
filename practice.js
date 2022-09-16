var firebaseConfig = {
    apiKey: "AIzaSyBQPUnvH_fWF8sUO-P3mj6VcYLpgxeOWMY",
    authDomain: "practise-a46cb.firebaseapp.com",
    projectId: "practise-a46cb",
    storageBucket: "practise-a46cb.appspot.com",
    messagingSenderId: "896018193805",
    appId: "1:896018193805:web:f9301694708d1f2f6ef1c4",
    measurementId: "G-XVS1KMQL4V"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        Exams:"Over"
    });
}