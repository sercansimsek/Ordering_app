import menuArray from "/data.js";

const mainContainer = document.querySelector(".main-container");
const mainOrder = document.querySelector(".main-order");
const addBtn = document.querySelector(".card-add-btn");

window.addEventListener("click", function (e) {
	if (e.target.dataset.id) {
		handleAddItem(e.target.dataset.id);
	}
});

function handleAddItem(itemId) {}

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

function getOrderTotal() {
	let orderTotalHtml = "";

	orderTotalHtml = `
		<p class="order-title">Your Order</p>
				<div class="order-list">
					<p class="order-name">Pizza</p>
					<button class="order-btn">remove</button>
					<p class="order-price">$14</p>
				</div>
				<hr class="order-divider"/>
				<div class="order-total">
					<p class="total-title">Total price:</p>
					<p class="total-price">$14</p>
				</div>
				<button class="complete-btn">Complete Order</button>
	`;

	mainOrder.innerHTML = orderTotalHtml;
}

getListOfFood();
getOrderTotal();
