const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirm_password = document.querySelector("#password2");


const handlesetnewpassword=async(userform)=>{

}


document.querySelector("#submit").onclick = () => {
    event.preventDefault()
  if (!email.value) return (email.style.border = "2px solid red");
  if (!password.value) return (password.style.border = "2px solid red");
  if (!confirm_password.value)
    return (confirm_password.style.border = "2px solid red");

  if (confirm_password.value != password.value) {
    // password.style.border = "2px solid red";
    confirm_password.style.border = "2px solid red";
    return (document.querySelector("#errMessage").innerHTML =
      "password must match");
  }
};



document.querySelectorAll("input").forEach((input) => {
  input.onkeyup = () => {
    input.style.border = "2px solid #fff";
    document.querySelector(".errMessage").innerHTML = "";
  };
});