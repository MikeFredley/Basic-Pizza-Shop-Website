document.getElementById("addCart").addEventListener("click", addCart)

function addCart()
{
    var sum = 0
    var totalRow = 0
    var amount = 1
    // arrays declared as default 0
   // var cart = ["","","","","","",""]
   // var cartAmount = ["0","0","0","0","0","0","0"]

    for (var i=1; i<12; i++) // Loops that runs or the amount of items within the table
    {
        if (document.getElementById("checkbox" + i).checked)
        {
            // Defaults the amount of items to 1 and changes it depending on user input if it is inputted
            if (amount = document.getElementById("textbox" + i).value == "")
            {
                amount = 1
            }
            else
            {
                amount = document.getElementById("textbox" + i).value // pulls amount specified from user

            }
           // cartAmount[i-1] = amount  // Adds the amount specified by user into the array
           // cart[i-1] = document.getElementById("pizzas").rows[i].cells[2].innerHTML // Moves the name of the item from the table into the array
            totalRow = parseFloat(amount) * parseFloat(document.getElementById("pizzas").rows[i].cells[3].innerHTML)  // Multiplies amount specified by user by cost
            sum = sum + totalRow  // determines the total
        }

      //  document.getElementById("total").innerHTML = "The total is: $" + sum
    }
    // Moves total and arrays into sessionStorage to be used in cart script
    sessionStorage.setItem("total", sum.toString())
    //sessionStorage.setItem("cart", cart.toString())
   // sessionStorage.setItem("cartAmount", cartAmount.toString())
    window.location.href = "cart.html"
}