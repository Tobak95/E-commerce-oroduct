const url = "https://dummyjson.com/products";
const innerProduct = document.querySelector(".inner-product");

const getproducts = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  // console.log(data.products);
  displayProducts(data.products);
};
getproducts(url);

function displayProducts(products) {
  innerProduct.innerHTML = "";
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    const { images, title, price, stock, rating } = product;
    productDiv.innerHTML = `
        <img src="${images[0]}" alt="${title}">
        <div>
        <h3>${title}</h3>
        <p class="price">$${price}</p>
        <p class="stock"> Stock: ${stock}</p>
        <p class= "rating"> Rating ${rating}</p>
        </div>
        
    `;
    innerProduct.appendChild(productDiv);
  });
}
