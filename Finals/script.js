// Load header and footer dynamically
document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header").innerHTML = data);

    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);
});

document.addEventListener("DOMContentLoaded", function() {
    fetch("store.html")
        .then(response => response.text())
        .then(data => document.getElementById("store-section").innerHTML = data);
});


