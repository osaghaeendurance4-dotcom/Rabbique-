let count = 0;
const products = document.getElementById("products");
const wishlistItems = document.getElementById("wishlistItems");

function addProduct() {
  if (count >= 10) {
    alert("Only 10 products allowed");
    return;
  }

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const file = document.getElementById("image").files[0];

  if (!name || !price || !file) {
    alert("Fill all fields");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => createCard(name, price, reader.result);
  reader.readAsDataURL(file);

  count++;
}

function createCard(name, price, img) {
  const phone = "234XXXXXXXXXX";

  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <img src="${img}">
    <h3>${name}</h3>
    <p>₦${price}</p>

    <button class="pay" onclick="payNow(${price}, '${name}')">
      Pay Now
    </button>

    <a class="whatsapp"
      href="https://wa.me/${phone}?text=I want to order ${name} for ₦${price}"
      target="_blank">
      Order on WhatsApp
    </a>

    <button class="wishlist" onclick="addWishlist('${name}', ${price}, '${img}')">
      ❤️ Wishlist
    </button>
  `;

  products.appendChild(div);
}

function addWishlist(name, price, img) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${img}">
    <h3>${name}</h3>
    <p>₦${price}</p>
  `;
  wishlistItems.appendChild(div);
}

function payNow(amount, product) {
  PaystackPop.setup({
    key: "YOUR_PAYSTACK_PUBLIC_KEY",
    email: "customer@email.com",
    amount: amount * 100,
    currency: "NGN",
    callback: () => alert("Payment successful"),
    onClose: () => alert("Payment cancelled")
  }).openIframe();
    }
