// Initialize Firebase
var config = {
    apiKey: "AIzaSyAAGopUQDY2GE0T1f_c0dYHrlaywDLqayM",
    authDomain: "my-mart-10d9a.firebaseapp.com",
    databaseURL: "https://my-mart-10d9a.firebaseio.com",
    projectId: "my-mart-10d9a",
    storageBucket: "my-mart-10d9a.appspot.com",
    messagingSenderId: "1012373943902"
  };
  firebase.initializeApp(config);
  //=================================
  const auth = firebase.auth();
  console.log("register")
  var btnSignUp = document.querySelector("#btnSignUp")
  if (btnSignUp) {
    console.log("btnSignUp not null")
    btnSignUp.addEventListener("click", ()=>{
        console.log("adasdasdasdasd")
    })
  }
  else{
      console.log("btnSignUp null")
  }
