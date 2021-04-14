// pulls the totals and the arrays from sessionStorage
total = sessionStorage.getItem("total")
//items = sessionStorage.getItem("cart")
//itemsAmount = sessionStorage.getItem("cartAmount")


// This was some fancy shenanigans I was going to try but went home instead
/*for (var i = 0; i < 6; i++)
{
    if (itemsAmount[i] != "0")
    {
        document.getElementById("cartItems").innerHTML = itemsAmount[i] + items[i] + '<br>' // displays each corresponding amount and item into the cart <p> element
    }
} */
// Takes the user back to the home page from the cart

document.getElementById("total").innerHTML = "Your total amount is: $" + total // displays the total