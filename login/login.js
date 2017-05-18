/**
 * Created by ZhengDaye on 2017/5/14.
 */
(function () {
// Initialize Firebase
    var config = {
        apiKey: "AIzaSyDIpNijaAVY9eHLjRmgBLLNkQHZs58e_DU",
        authDomain: "foodsmart-556eb.firebaseapp.com",
        databaseURL: "https://foodsmart-556eb.firebaseio.com",
        projectId: "foodsmart-556eb",
        storageBucket: "foodsmart-556eb.appspot.com",
        messagingSenderId: "309661839555"
    };
    firebase.initializeApp(config);

    // get all elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPWD = document.getElementById('txtpassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');
    const link = document.getElementById('link');

    // add login event

    btnLogin.addEventListener('click', e => {
        //get email and pwd
        const email = txtEmail.value;
        const pwd = txtPWD.value;
        const auth = firebase.auth();
    //sign in
    const promise = auth.signInWithEmailAndPassword(email, pwd);
    promise.catch(e => console.log(e.message));

});

    // add signup event
    btnSignUp.addEventListener('click', e => {
        //get email and pwd
        // TODO: email validation

        const email = txtEmail.value;
        const pwd = txtPWD.value;
        const auth = firebase.auth();
        //sign in
        const promise = auth.createUserWithEmailAndPassword(email, pwd);
        promise.catch(e => console.log(e.message));

});
    //logout btn
    btnLogout.addEventListener('click', e =>{
        firebase.auth().signOut();

    });




    //add a realtime linstener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
            link.classList.remove('hide');
        } else{
            console.log('Not logged in');
            btnLogout.classList.add('hide');
            link.classList.add('hide');
        }
    });


}());