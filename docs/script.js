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
