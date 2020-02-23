function validateForm() {
  // declaring variables
    var a = document.forms["Form"]["fname"].value;
    var b = document.forms["Form"]["email"].value;
    var c = document.forms["Form"]["phone"].value;
    var d = document.forms["Form"]["message"].value;
    // setting conditions
    if (a=="" && b == "" && c=="" && d=="" ){
     alert("All the fields must be filled out");
    }
    else if (a == "") {
      alert("Name must be filled out");
    }
    else if (b == ""){
      alert("Email address must be filled out");
    } 
    else if (c == "" ){
      alert("Phone number must be filled out");
    } 
    else if (d == ""){
      alert("Message must be filled out");
    } 
    else{
      alert("Thank you for contacting me. I will respond to you as soon as possible. Have a good day : )")
    }
}