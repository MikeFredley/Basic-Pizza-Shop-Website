document.addEventListener("DOMContentLoaded",displayHeader)
window.addEventListener("click", windowClick)

// Function to display the header
function displayHeader()
{
    // Places html code into the div with the id headerId
    document.getElementById("headerId").innerHTML =
        '<header>' +
            '<img src="../img/pizza.jpg" alt="Mikes Pizza">' +
            '<p>Mikes Pizzaria</p>' +
        '</header>'
    // Calls the functions to display the navbar and footer
    displayNavbar()
    displayFooter()
}

// Function to display the navbar
function displayNavbar()
{
    // Places the html code into the div with the id navId
    document.getElementById("navId").innerHTML =
        '<navbar>' +
            '<a href="home.html">Home</a>' +
            '<div class="dropdown">' +
            '<a href="#Order" id="pizzaDropDown" class="dropbtn">Order</a>' +
                '<div id="pizzaLinks" class="dropdown-content">' +
                '   <a href="menu.html">Menu</a>' +
                '   <a href="onlineOrder.html">Online Order</a>' +
                '</div>' +
            '</div>' +
            '<a href="locations.html">Locations</a>' +
            '<a href="canvas.html">Canvas</a>' +
        '</navbar>'
    // Creates an even listener for the dropdown box click event
    document.getElementById('pizzaDropDown').addEventListener("click", displayDropDown);
}

// Function to display the footer
function displayFooter()
{
    // Places the html code into the div with the id footId
    document.getElementById("footId").innerHTML =
        '<footer>' +
        '<p>Mikes Pizzaria &copy 2018</p>'
    '</footer>'
}

// Function to display the dropdown box
function displayDropDown()
{
    // toggles the show class onto the element with the id pizzaLinks
    document.getElementById("pizzaLinks").classList.toggle('show');
}

// This function makes it so you can close the dropdown box no matter where you click on the screen
function windowClick()
{
    if (!event.target.matches('.dropbtn'))
    {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++)
        {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show'))
            {
                openDropdown.classList.remove('show')
            }
        }
    }
}