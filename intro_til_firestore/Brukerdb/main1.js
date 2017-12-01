firebase.initializeApp({
    apiKey: "AIzaSyB0SlFeXkJzdLfL4ajhHCJcEf3EpOTEmCw",
    authDomain: "minforstedb7.firebaseapp.com",
    projectId: "minforstedb7",
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var navnE = document.querySelector(".navn");
var epostE = document.querySelector(".epost");
var alderE = document.querySelector(".alder");
var knappE = document.querySelector(".knapp");

knappE.addEventListener("click", function () {
    db.collection("mappe").add({
        navn: navnE.value,
        epost: epostE.value,
        alder: alderE.value
    });
    navnE.value= "";
    epostE.value= "";
    alderE.value= "";

});
