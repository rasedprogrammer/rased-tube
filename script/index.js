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

const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
};

// {
//     "category_id": "1003",
//     "video_id": "aaac",
//     "thumbnail": "https://i.ibb.co/NTncwqH/luahg-at-pain.jpg",
//     "title": "Laugh at My Pain",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/XVHM7NP/kevin.jpg",
//             "profile_name": "Kevin Hart",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "1.1K",
//         "posted_date": "13885"
//     },
//     "description": "Comedian Kevin Hart brings his unique brand of humor to life in 'Laugh at My Pain.' With 1.1K views, this show offers a hilarious and candid look into Kevin's personal stories, struggles, and triumphs. It's a laugh-out-loud experience filled with sharp wit, clever insights, and a relatable charm that keeps audiences coming back for more."
// }

// <h2 class="card-title">Card Title</h2>
// <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
// <div class="card-actions justify-end">
// <button class="btn btn-primary">Buy Now</button>
const displayVideos = (videos) => {
  const videosContainer = document.getElementById("videos");
  videos.forEach((video) => {
    console.log(video);

    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <figure class="h-[200px] relative">
        <img
          class="h-full w-full object-cover"
          src=${video.thumbnail}
          alt="Shoes" />
          <span class="absolute bg-black text-white right-2 bottom-2">${
            video.others.posted_date
          }</span>
      </figure>
      <div class="py-3">
        <div class="flex gap-5">
          <div class="w-10 h-10">
            <img class="h-full w-full rounded-full object-cover" src=${
              video.authors[0].profile_picture
            }/>
          </div>
          <div>
            <h2 class="font-bold">
              ${video.title}
            </h2>
            <div class="flex gap-5 items-center">
              <p class="text-gray-400">${video.authors[0].profile_name}</p>
              ${
                video.authors[0].verified
                  ? `<img class="w-5 h-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>`
                  : ``
              }
            </div>
            <p class="text-sm text-gray-400">${
              video.others.views
            } <span>views<span/></p>
          </div>
        </div>

      </div>
      </div>
    `;
    videosContainer.append(card);
  });
};

loadCategories();
loadVideos();
