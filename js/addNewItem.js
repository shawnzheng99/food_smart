/**
 * Created by Shawn Zheng on 2017/5/17.
 * Version 1.0
 */
    // Initialize Firebase
const config = {
        apiKey: "AIzaSyDIpNijaAVY9eHLjRmgBLLNkQHZs58e_DU",
        authDomain: "foodsmart-556eb.firebaseapp.com",
        databaseURL: "https://foodsmart-556eb.firebaseio.com",
        projectId: "foodsmart-556eb",
        storageBucket: "foodsmart-556eb.appspot.com",
        messagingSenderId: "309661839555"
    };
firebase.initializeApp(config);

function send() {
    let fname = $('#foodName').val();
    let fprice = $('#price').val();
    let famt = $('#amount').val();
    let fexpire = document.getElementById('expireDate').value;
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            //create a unique key for each item.
            let foodKey = firebase.database().ref(firebaseUser.uid + '/').child('Tracking').push().key;

            //write data to database
            console.log("Welcome!");
            firebase.database().ref(firebaseUser.uid + '/' + 'Tacking/' + foodKey).set({
                name: fname,
                amt: fprice,
                price: famt,
                expire: fexpire,
                pctLeft: 100
            });

            console.log("data sent!");

            } else {
            alert("not logged in");
            window.location = '../firebase/loginFrom.html';
        }
    });
}


// Validation
function valiPrice() {
    let fPrice = $('#price').val();
    if(fPrice <= 0 || isNaN(fPrice)){
        alert("Invalid price");
    }
}

function valiName(){
    let fname = $('#foodName').val();
    if(fname.length > 20) {
        alert("Food name limited at 20 characters");
    }

}