
    
const ulCategories = document.querySelector("#categories");

const categoryItems = ulCategories.querySelectorAll(".item");
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.innerHTML += '<div class="container">Я контейнер!</div>';

categoryItems.forEach(item => {
    const title = item.querySelector("h2").textContent;
    const elementItems = item.querySelectorAll("ul li");

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementItems.length}`);

    
    elementItems.forEach(li => {
        li.style.border = "1px solid black";
        li.style.width = "360px";
        li.style.borderRadius = "3px";
        li.style.padding = "5px";
        li.style.margin = "8px 0";
        li.style.listStyleType = "none";
        ulCategories.style.listStyleType = "none";
    });


});