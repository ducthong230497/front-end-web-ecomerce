$(document).ready(function(){

    var config = {
        apiKey: "AIzaSyAAGopUQDY2GE0T1f_c0dYHrlaywDLqayM",
        authDomain: "my-mart-10d9a.firebaseapp.com",
        databaseURL: "https://my-mart-10d9a.firebaseio.com",
        projectId: "my-mart-10d9a",
        storageBucket: "my-mart-10d9a.appspot.com",
        messagingSenderId: "1012373943902"
      };
    firebase.initializeApp(config);
    var db = firebase.firestore();
    var loadParentDanhMuc = function(){
        db.collection("DanhMuc").where("idCha","==","None")
        .onSnapshot(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(doc.data().Ten);
            });
    });
    }

    loadParentDanhMuc();
});