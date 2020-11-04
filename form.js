//Full Name
function validateFullname (event){
  const name = event.target.value;
  if(name.length < 6){
    document.getElementById("error-name").innerHTML = "Name must contain at least six characters"
  } else if ((/\s/.test(name)!=1)){
    document.getElementById("error-name").innerHTML = "Full Name must contain at least one whitespace"
  } 
}
function resetValidateFullname (event){
  document.getElementById("error-name").innerHTML = " ";
}
//Email
function validateEmail (event){
 const email = event.target.value;
  if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)!=1){
    document.getElementById("error-email").innerHTML = "Email error";
  }
}
function resetValidateEmail (event){
  document.getElementById("error-email").innerHTML = " ";
}
//Password
function validatePassword (event){
  const password = event.target.value;
  if(password.length < 8){
    document.getElementById("error-password").innerHTML = "Password required 8 characters included a number";
  }else  if ((/\d/.test(password)!=1)){
    document.getElementById("error-password").innerHTML = "The password required a number"
  } 
}
function resetValidatePassword (event){
  document.getElementById("error-password").innerHTML = " ";
}
//Password2
function validatePassword2 (event){
  const password2 = event.target.value;
  const password = document.getElementById("password");
  if(password2 != password.value) {
    console.log(password2+" "+password.value);
    document.getElementById("error-password2").innerHTML = "Password does not match";
  }
}
function resetValidatePassword2 (event){
  document.getElementById("error-password2").innerHTML = " ";
}
//Age
function validateAge (event){
  const age = event.target.value;
  if(age < 18){
    document.getElementById("error-age").innerHTML = "Sorry, only adults";
  }
}
function resetValidateAge (event){
  document.getElementById("error-age").innerHTML = " ";
}
//Phone Number
var patt1 = /[-_()]/g;
function validatePhoneNumber (event){
  const phoneNumber = event.target.value;
  if(phoneNumber.length <= 6){
    document.getElementById("error-phone").innerHTML = "Phone number is too short";
  } else if(/\s/.test(phoneNumber)){
    document.getElementById("error-phone").innerHTML = "Not Space";
  }
    else if(phoneNumber.match(patt1)){
      document.getElementById("error-phone").innerHTML = "Not dash";
  }   
}
function resetValidatePhoneNumber (event){
  document.getElementById("error-phone").innerHTML = " ";
}
//Adress
function validateAdress (event){
  const adress = event.target.value;
    if(adress.length < 5){
    document.getElementById("error-adress").innerHTML = "Is not valid";
  } else if ((/\s/.test(adress)!=1)){
    document.getElementById("error-adress").innerHTML = "Adress must contain at least one whitespace";
  } else  if ((/\d/.test(adress)!=1)){
    document.getElementById("error-adress").innerHTML = "The adress required a number";
  }
}
function resetValidateAdress (event){
  document.getElementById("error-adress").innerHTML = " ";
}
//City
function validateCity (event){
  const city = event.target.value;
  if(city.length < 3){
    document.getElementById("error-city").innerHTML = "City must contain at least three characters";
  }
}
function resetValidateCity (event){
  document.getElementById("error-city").innerHTML = " ";
}
//Zip Code
function validateZipCode (event){
  const zipCode = event.target.value;
  if(zipCode.length < 3){
    document.getElementById("error-zip").innerHTML = "Zip Code must contain at least three characters";
  }
}
function resetValidateZipCode (event){
  document.getElementById("error-zip").innerHTML = " ";
}
//DNI
function validateDni (event){
  const dni = event.target.value;
  if(dni.length > 8 || dni.length < 7){
    document.getElementById("error-dni").innerHTML = "DNI is invalid";
  }
}
function resetValidateDni (event){
  document.getElementById("error-dni").innerHTML = " ";
}

//iniciadores 
window.onload = function(){
  var fullName = document.getElementById('full-name');
  fullName.onblur = validateFullname;
  fullName.onfocus = resetValidateFullname;
  
  var email = document.getElementById("email");
  email.onblur = validateEmail;
  email.onfocus = resetValidateEmail;

  var password = document.getElementById("password");
  password.onblur = validatePassword;
  password.onfocus = resetValidatePassword;

  var password2 = document.getElementById("password2");
  password2.onblur = validatePassword2;
  password2.onfocus = resetValidatePassword2;

  var age = document.getElementById("age");
  age.onblur = validateAge;
  age.onfocus = resetValidateAge;
  
  var adress = document.getElementById("adress");
  adress.onblur = validateAdress;
  adress.onfocus = resetValidateAdress;

  var city = document.getElementById("city");
  city.onblur = validateCity;
  city.onfocus = resetValidateCity;

  var zipCode = document.getElementById("zipCode");
  zipCode.onblur = validateZipCode;
  zipCode.onfocus = resetValidateZipCode;

  var dni = document.getElementById("dni");
  dni.onblur = validateDni;
  dni.onfocus = resetValidateDni;

  var phoneNumber = document.getElementById("phone");
  phoneNumber.onblur = validatePhoneNumber;
  phoneNumber.onfocus = resetValidatePhoneNumber;
}