const menuData = {
    presidential: {
        title: "Presidential Halo-Halo",
        description: "A luxurious blend of flavors fit for the highest office! This indulgent treat combines creamy, chewy, and crunchy textures with the perfect balance of sweetness.",
        ingredients: "Ingredients: Frozen milk, Leche flan, Pandan jelly, Ube halaya, Sago, Mais, Nata de coco, Banana cinnamon, Langka, Special macapuno, Rice crispies.",
        image: "ube.jpg"
    },
    mango: {
        title: "Mango Graham Halo-Halo",
        description: "A delightful fusion of creamy frozen milk, sweet caramel syrup, and fresh mango chunks layered with crunchy graham. Like a mango float, but better!",
        ingredients: "Ingredients: Frozen milk, Leche flan, Pandan jelly, Caramel syrup, Fresh mango, Graham.",
        image: "mango.jpg"
    },
    matcha: {
        title: "Matcha Halo-Halo",
        description: "A Green Tea Lover’s Paradise! A heavenly blend of matcha syrup with classic halo-halo goodness, packed with ube, nata, and banana cinnamon.",
        ingredients: "Ingredients: Frozen milk, Matcha syrup, Leche flan, Pandan jelly, Ube halaya, Sago, Mais, Nata, Banana cinnamon, Langka, Special macapuno, Rice crispies.",
        image: "matcha.jpg"
    },
    strawberry: {
        title: "Strawberry Halo-Halo",
        description: "A refreshing mix of real strawberry goodness with the perfect crunch of pistachios and cashews. If you love a fruity-nutty combo, this one’s for you!",
        ingredients: "Ingredients: Frozen milk, Leche flan, Strawberry fruits, Vanilla jelly, Strawberry syrup, Pistachio, Cashew.",
        image: "strawberry.jpg"
    }
};

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");
const popupIngredients = document.getElementById("popup-ingredients");
const popupImage = document.getElementById("popup-image");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function () {
        const menuKey = this.getAttribute("data-menu");
        const menuInfo = menuData[menuKey];

        popupTitle.textContent = menuInfo.title;
        popupDescription.textContent = menuInfo.description;
        popupIngredients.textContent = menuInfo.ingredients;
        popupImage.src = menuInfo.image;
        popup.style.display = "flex";
    });
});

closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
});
