const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategorise(data.categories))
    .catch((error) => console.log(error));
};

const displayCategorise = (data) => {
  console.log(data);
};

loadCategories();
