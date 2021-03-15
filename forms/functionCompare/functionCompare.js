function compare(password1, password2) {
  newPassword == password1
  confirmPassword == password2
  if (newPassword == confirmPassword) {
  console.log("True") 
} else {
  console.log("False")
 }
}



let newPassword = prompt("What is your new password?")
let confirmPassword = prompt("Confirm your new password!")
let passwordConfirmation = compare(newPassword, confirmPassword)

