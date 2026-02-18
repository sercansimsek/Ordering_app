import menuArray from "/data.js";

const mainContainer = document.querySelector(".main-container");
const mainOrder = document.querySelector(".main-order");
const popupModal = document.querySelector(".popup-modal");
const confirmedMessage = document.querySelector(".confirmed-message");
const nameInput = document.querySelector(".name-input");

let orderItems = [];

window.addEventListener("click", function (e) {
	if (e.target.dataset.id) {
		handleAddItem(e.target.dataset.id);
		mainOrder.style.display = "flex";
	}

	if (e.target.dataset.remove) {
		handleRemoveItem(e.target.dataset.remove);
	}

	if (e.target.dataset.complete) {
		popupModal.style.display = "flex";
	}

	if (e.target.dataset.pay) {
		e.preventDefault();
		let payHtml = "";
		let name = nameInput.value;

		payHtml = `<h2>Thanks ${name}! Your order is on its way!</h2>`;
		popupModal.style.display = "none";
		mainOrder.style.display = "none";

		confirmedMessage.innerHTML = payHtml;
	}
});

function handleRemoveItem(removeId) {
	orderItems = orderItems.filter((item) => item.id !== parseInt(removeId));

	if (!orderItems.length) {
		mainOrder.style.display = "none";
	}

	getOrderList();
}

function handleAddItem(itemId) {
	let item = menuArray.find((item) => item.id === parseInt(itemId));
	if (item) {
		item = { ...item, id: parseInt((Math.random() * 100 + 1).toFixed(3)) };
		orderItems.push(item);
	}
	console.log(orderItems);

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
		<button class="complete-btn" data-complete="completed">Complete Order</button>
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
