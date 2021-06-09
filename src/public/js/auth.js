function ValidatePhone(){
    var phone = document.getElementById("inputPhone3").value;
    if (phone == null || phone == "") {
        alert("Please enter the phone number.");
        return false;
    } 
    else if (phone.length > 10) {
        alert("Phone number is too long.");
        return false;
    }
    else if (phone .length < 10) {
        alert("Phone number is not long enough.");
        return false;
    }
    else {
        return true;
    }
}

function ValidatePass(){
    var password = document.getElementById("inputPassword3").value;
    var passConf = document.getElementById("inputConfPass3").value;
    if (password == null || password == "") {
        alert("Please enter the password.");
        return false;
    }
    else if (passConf == null || passConf =="") {
        alert("Please enter the password.");
        return false;
    }
    else if (password.localeCompare(passConf)!=0) {
        alert("Password confirmation failed");
        return false;
    }
    else{
        return true;
    }
}

function Validation(){
    var num1 = ValidatePhone()
    var num2 = ValidatePass();
    if (num1){
        if(num2){
            alert("Completed!");
        }
    }
}

function resetForm() {
    document.myform.reset();
}