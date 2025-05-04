document.addEventListener('DOMContentLoaded', () => {
  const productCards = document.querySelectorAll('.product-card');
  const totalItemsSpan = document.querySelector('.footer-bar span:nth-child(1)');
  const billAmountSpan = document.querySelector('.footer-bar span:nth-child(2)');

  let products = [];

  productCards.forEach((card, index) => {
    const priceText = card.querySelector('.controls span').textContent;
    const price = parseFloat(priceText.match(/\$(\d+)/)[1]);

    const checkbox = card.querySelector('input[type="checkbox"]');
    const minusBtn = card.querySelector('button:first-of-type');
    const plusBtn = card.querySelector('button:last-of-type');
    const quantitySpan = card.querySelector('.controls span');

    products.push({
      price,
      quantity: 1,
      selected: false,
      checkbox,
      quantitySpan,
      updateDisplay() {
        this.quantitySpan.textContent = `$${this.price} * ${this.quantity}`;
      }
    });

    checkbox.addEventListener('change', () => {
      products[index].selected = checkbox.checked;
      updateFooter();
    });

    plusBtn.addEventListener('click', () => {
      products[index].quantity++;
      products[index].updateDisplay();
      updateFooter();
    });

    minusBtn.addEventListener('click', () => {
      if (products[index].quantity > 1) {
        products[index].quantity--;
        products[index].updateDisplay();
        updateFooter();
      }
    });
  });

  function updateFooter() {
    let totalItems = 0;
    let totalBill = 0;

    products.forEach(product => {
      if (product.selected) {
        totalItems += product.quantity;
        totalBill += product.price * product.quantity;
      }
    });

    totalItemsSpan.textContent = `Total Items: ${totalItems}`;
    billAmountSpan.textContent = `Bill Amount: $${totalBill}`;
  }
});