const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categories.forEach((item) => {
    // Create Button
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;
    // add Button to Container
    categoryContainer.append(button);
  });
};

loadCategories();
