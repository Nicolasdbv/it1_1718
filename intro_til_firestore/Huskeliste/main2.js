
firebase.initializeApp({
    apiKey: "AIzaSyAM04uEirWmkbkGYayB30eo1iQsYvSCrb0",
    authDomain: "huskeliste7.firebaseapp.com",
    projectId: "huskeliste7"
});


// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var todoE = document.querySelector(".todo");
var knappE = document.querySelector(".knapp");
var listeE = document.querySelector(".liste");

knappE.addEventListener("click", function (){
    db.collection("huskeliste7").add({
        todo: todoE.value = ""
    });
   todoE.value= "";

});

var ref = db.collection("huskeliste7");

ref.onSnapshot(function(data){
    listeE.innerHTML = "";
    var dokument = data.docs;
    for(var x in dokument){
        listeE.innerHTML += "<li>" + dokument[x].data().todo + "</li>";
    }
});
