import menuArray from "/data.js";

const mainContainer = document.querySelector(".main-container");
const mainOrder = document.querySelector(".main-order");
const addBtn = document.querySelector(".card-add-btn");

window.addEventListener("click", function (e) {
	if (e.target.dataset.id) {
		handleAddItem(e.target.dataset.id);
		// mainOrder.style.display = "flex";
	}
});

function handleAddItem(itemId) {
	let newArr = menuArray.filter((item) => item.id === parseInt(itemId));

	let sum = newArr.reduce((total, currentPrice) => {
		total + currentPrice.price;
	}, 0);

	console.log(newArr, sum);
}

function getListOfFood() {
	let listHtml = "";

	menuArray
		.map((item) => {
			const { name, ingredients, price, emoji, id } = item;
			listHtml += `
      <div class="main-card">
        <span class="card-icon">${emoji}</span>
        <div class="card-details">
          <p class="details-name">${name}</p>
          <p class="details-ingredients">${ingredients.join(", ")}</p>
          <p class="details-price">$${price}</p>
        </div>
        <button class="card-add-btn" data-id="${id}">+</button>
      </div>
      <hr>
  `;
		})
		.join("");

	mainContainer.innerHTML = listHtml;
}

getListOfFood();
