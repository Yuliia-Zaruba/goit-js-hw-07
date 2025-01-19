const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".items");

console.log(`Number of categories: ${categoryItems.lengs}`);

categoryItems.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elementsCount = item.querySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
