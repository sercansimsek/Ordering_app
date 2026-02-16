import menuArray from "/data.js";

const mainContainer = document.querySelector(".main-container");
const mainOrder = document.querySelector(".main-order");
const addBtn = document.querySelector(".card-add-btn");
const orderList = document.querySelector(".order-list");
const orderBtn = document.querySelector(".order-btn");

let orderItems = [];

window.addEventListener("click", function (e) {
	if (e.target.dataset.id) {
		handleAddItem(e.target.dataset.id);
		mainOrder.style.display = "flex";
	}

	if (e.target.dataset.remove) {
		handleRemoveItem(e.target.dataset.remove);
	}
});

function handleRemoveItem(removeId) {
	orderItems = orderItems.filter((item) => item.id !== parseInt(removeId));

	getOrderList();
}

function handleAddItem(itemId) {
	const item = menuArray.find((item) => item.id === parseInt(itemId));
	if (item) {
		orderItems.push(item);
	}
	getOrderList();
}

function getOrderList() {
	let orderListItems = "";

	let sum = orderItems.reduce((total, currentPrice) => {
		return total + currentPrice.price;
	}, 0);

	orderItems.forEach((item) => {
		const { name, price, id } = item;

		orderListItems += `
			<div class="order-list">
				<p class="order-name">${name}</p>
				<button class="order-btn" data-remove="${id}">remove</button>
				<p class="order-price">$${price}</p>
			</div>
		
		`;
	});

	const orderList = `
		<p class="order-title">Your Order</p>
		${orderListItems}
		<hr class="order-divider"/>
		<div class="order-total">
			<p class="total-title">Total price:</p>
			<p class="total-price">$${sum}</p>
		</div>
		<button class="complete-btn">Complete Order</button>
	`;

	mainOrder.innerHTML = orderList;
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
