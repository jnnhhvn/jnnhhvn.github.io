document.addEventListener("DOMContentLoaded", function () {
    // Load Header and Footer
    fetch("header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header").innerHTML = data);

    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);

    // Get product data from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get("name");
    const productPrice = urlParams.get("price");
    const productImg = urlParams.get("img");
    const popup = document.getElementById("popup");

    if (productName && productPrice && productImg) {
        document.getElementById("order-name").textContent = productName;
        document.getElementById("order-price").textContent = `Price: ${productPrice}`;
        document.getElementById("order-img").src = `./assets/items/${productImg}`;
        document.getElementById("order-inclusions").textContent = productInclusions ? "Included items available." : "No inclusions specified.";

        // Add to Cart Button
        document.getElementById("add-to-cart").addEventListener("click", function () {
            let quantity = document.getElementById("order-quantity").value;
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push({
                name: productName,
                price: productPrice,
                img: productImg,
                quantity: quantity
            });
            localStorage.setItem("cart", JSON.stringify(cart));

            // Show the pop-up notification
            popup.classList.add("show");
            setTimeout(() => {
                popup.classList.remove("show");
            }, 2000);
        });
    } else {
        document.getElementById("order-card").innerHTML = "<p class='text-center'>No product selected.</p>";
    }
});
