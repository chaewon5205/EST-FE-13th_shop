import { readCart, updateCartCount } from "./utils/common.js";

updateCartCount();

const cart = readCart();

const cartList = document.querySelector(".cart-list");

const fragment = document.createDocumentFragment();

cart.forEach(item => {
  const article = document.createElement("article");

  article.className = "cart-item";

  article.innerHTML = `
    <span class="item-check">
      <span class="check-box"></span>
    </span>

    <div class="cart-thumb">
      <img src="${item.thumb}" alt="${item.title}">
    </div>

    <div class="cart-item-info">
      <h2>${item.title}</h2>
      <p>${item.brand}</p>
      <strong>수량 : ${item.qty}</strong>
    </div>

    <div class="quantity-box">
      <button type="button">-</button>
      <span>${item.qty}</span>
      <button type="button">+</button>
    </div>
  `;

  fragment.append(article);
});

cartList.append(fragment);