// A function that triggers when the page loads
window.onload = function greetings()
{
    // Gets a random number between 1 and five and uses it to index the array then displays it
    var greet = ["Hello!", "Welcome to Mike's Pizzaria!", "The Best Pizza Around!", "About Us!", "Pizza Done Right!"]
    var i = Math.floor((Math.random() * 5) + 1)
    document.getElementById("greeting").innerHTML = greet[i-1]
}
