function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if((username=="vinesh.gandhe@gmail.com" || username=="gvk7663@gmail.com")&& password=="user" )
{
    alert("login succesfully");
    window.open("home.html");
    return false;

}
else
{
    alert("login failed");
}


}