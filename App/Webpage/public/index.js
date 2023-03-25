var myForm = document.getElementById("username");
function submitForm(event) {
    var user = myForm.submit();
    location = "app.html"
    console.log(user);         
}
