import menuArray from "/data.js";

const mainContainer = document.querySelector(".main-container");

function render() {
	let contentHtml = "";

	menuArray.map((item) => {
		const { name, ingredients, price, emoji } = item;
		contentHtml += `
      <div class="main-card">
        <p class="card-icon">${emoji}</p>
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
