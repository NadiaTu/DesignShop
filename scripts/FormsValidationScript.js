$(window.on("load", function () {}));

function contactOK() {
    var fname = document.getElementById("first_name").value;
    var lname = document.getElementById("last_name").value;
    alert("Thank you, " + " " + fname + " " + lname + ". We will reply soon.");
}


function validateEmpty() {
    var eFirst = document.forms["contactF"]["first_name"].value;
    var eLast = document.forms["contactF"]["last_name"].value;
    var eEmail = document.forms["contactF"]["email"].value;
    var ePhone = document.forms["contactF"]["tel"].value;
    var eDetails = document.forms["contactF"]["details"].value;    
    if ( eFirst === "" || eLast === "" || eEmail === "" || ePhone ==="" || eDetails === "") {
        alert("Please fill all the fields in the form");
        return false;
    }
    else 
    {
        contactOK();
        return true; 
    }
}

function popSignOK() {
    var semail = document.getElementById("s_email").value;
    alert("Welcome" + " " +  semail + "!");
}

function validateEmptySign() {   
    var eEmail = document.forms["signF"]["email"].value;
    var ePassword = document.forms["signF"]["password1"].value;
    if ( eEmail === "" || ePassword === "") {
        alert("Please fill all the fields in the form");
        return false;
    }
    else 
    {
        popSignOK();
        return true; 
    }
}

function popNameOK() {
    var fname = document.getElementById("first_name").value;
    var lname = document.getElementById("last_name").value;
    alert("Welcome" + fname + " " + lname + "!");
}

function validateEmptyReg() {
    var eFirst = document.forms["RegisterF"]["first_name"].value;
    var eLast = document.forms["RegisterF"]["last_name"].value;
    var eEmail = document.forms["RegisterF"]["email"].value;
    var eAddress = document.forms["RegisterF"]["address1"].value;
    var eCountry = document.forms["RegisterF"]["country"].value; 
    var eZip = document.forms["RegisterF"]["zip"].value;    
    var ePhone = document.forms["RegisterF"]["tel"].value;
    var password1 = document.getElementById("password1");
    var password2 = document.getElementById("password2");
    
    if ((password1.value === "") || (password2.value === "") ||  (password1.value !== password2.value)) {
            alert("The password fields should be equal and not blank. Please type the password again in the password fields");
        return false;
    }
        
    if ( eFirst === "" || eLast === "" || eEmail === "" || eAddress ==="" || eCountry === "" || eZip === "" || ePhone === "" ) {
        alert("Please fill all the fields in the form");
        return false;
    }
    
     popNameOK()
     return true; 
}