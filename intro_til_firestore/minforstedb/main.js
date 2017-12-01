firebase.initializeApp({
    apiKey: "AIzaSyB0SlFeXkJzdLfL4ajhHCJcEf3EpOTEmCw",
    authDomain: "minforstedb7.firebaseapp.com",
    projectId: "minforstedb7",
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var tittelE = document.querySelector(".tiitel");
var tekstE = document.querySelector(".tekst");
var knappE = document.querySelector(".knapp");

knappE.addEventListener("click", function () {
    db.collection("mappe").add({
        tittel: tittelE.value,
        tekst: tekstE.value
    });
    tiitelE.value= "";
    tekstE.value= "";

});


