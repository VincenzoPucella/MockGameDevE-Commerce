    let cart = [];

    function addToCart(name, price, quantity = 1) {
        // Check if the item is already in the cart
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            // Update quantity if item exists
            existingItem.quantity += quantity;
        } else {
            // Add new item to cart
            cart.push({ name, price, quantity });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(`Added ${quantity} ${name} to cart at $${price} each.`);
    }
    

    function calculateTotalPrice() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalPrice = 0;
        for (let i = 0; i < cart.length; i++) {
            totalPrice += cart[i].price * cart[i].quantity;
        }
        return totalPrice;
    }
    
    function searchGames() {
        // Get input value
        let input = document.getElementById("searchInput").value.toLowerCase();
        // Get all containers
        let containers = document.getElementsByClassName("container");
        // Loop through containers
        for (let i = 0; i < containers.length; i++) {
                // Get container name
                let name = containers[i].getElementsByTagName("p")[0].innerHTML.toLowerCase();
                // Check if input matches container name
                if (name.includes(input)) {
                        containers[i].style.display = "block";
                } else {
                        containers[i].style.display = "none";
                }
        }
}

function displayCartItemsOnInvoice() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsElement = document.getElementById("cart-products");
    let cartTotalElement = document.getElementById("cart-total");
    
    if (cartItemsElement) { // Checks if you're on the invoice page
        let cartItemsHTML = "";
        let totalPrice = 0;
        for (let i = 0; i < cart.length; i++) {
            cartItemsHTML += `<li>${cart[i].name}: $${cart[i].price} x ${cart[i].quantity}</li>`;
            totalPrice += cart[i].price * cart[i].quantity;
        }
        cartItemsElement.innerHTML = cartItemsHTML;
        cartTotalElement.innerHTML = `$${totalPrice.toFixed(2)}`;
    }
}
function redirectToInvoice() {
    // Redirects to Invoice.html
    window.location.href = 'Invoice.html';
}

document.addEventListener('DOMContentLoaded', function() {
    displayCartItemsOnInvoice();
});
