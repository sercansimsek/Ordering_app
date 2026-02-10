import menuArray from "/data.js";

const mainContainer = document.querySelector(".main-container");
const mainOrder = document.querySelector(".main-order");

function render() {
	let contentHtml = "";

	menuArray.map((item) => {
		const { name, ingredients, price, emoji } = item;
		contentHtml += `
      <div class="main-card">
        <span class="card-icon">${emoji}</span>
        <div class="card-details">
          <p class="details-name">${name}</p>
          <p class="details-ingredients">${ingredients.join(", ")}</p>
          <p class="details-price">$${price}</p>
        </div>
        <button class="card-add-btn">+</button>
      </div>
      <hr>
  `;
	});

	mainContainer.innerHTML = contentHtml;
}

render();

/* function renderOrderSummary() {
	let summaryHtml = "";

	summaryHtml = `<section class="main-order">
					<p class="order-title">Your Order</p>
					<div class="order-list">
						<p class="order-name">Pizza</p>
						<button class="order-btn">remove</button>
						<p class="order-price">$14</p>
					</div>
                    <hr>
				</section>`;

	mainOrder.innerHTML = summaryHtml;
}

renderOrderSummary(); */
