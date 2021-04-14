document.getElementById("formSubmit").addEventListener("click", pageRedirect)

function pageRedirect()
{
    // Gets the values out of the input boxes
   var userName = document.getElementById("userName").value;
   var password = document.getElementById("password").value;
   // Compares the inputs to the correct option
    if (userName == "student" && password == "student")
    {
        // If correct it redirects you to the home page
        window.location.href = "home.html";
    }
    else
    {
        // If not correct it prompts the user
        document.getElementById("message").innerHTML = "Incorrect username or password.";
    }
}