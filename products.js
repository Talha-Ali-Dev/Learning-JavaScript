function loadProducts() {
  const productsContainer = document.querySelector(".my-products");
  const reviews = document.querySelector(".reviews");

  fetch("https://dummyjson.com/products")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.products.forEach((product) => {
        productsContainer.innerHTML += `
          <div class="bg-red-100 rounded-sm p-3">
            <h2>Title: ${product.title}</h2>
            <p>Description: ${product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: ${product.rating}</p>
          </div>
        `;

        product.reviews.forEach((review) => {
          reviews.innerHTML += `
            <div class="bg-gray-800 p-3 rounded">
              <p>${review.reviewerName}</p>
              <p>${review.rating}</p>
              <p>${review.comment}</p>
              <p>${review.date}</p>
              <p>${review.reviewerEmail}</p>
            </div>
          `;
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

loadProducts();

// Search box

function productFinder(searchText) {
  const searchProduct = document.querySelector(".searchProduct");
  fetch("https://dummyjson.com/products")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.products.filter((product) => {
        if (product.title === searchText) {
          searchProduct.innerHTML = `
          <div class="bg-red-100 rounded-sm p-3">
            <h2>Title: ${product.title}</h2>
            <p>Description: ${product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: ${product.rating}</p>
          </div>`;
        }
      });
    });
}

productFinder("Essence Mascara Lash Princess");

// Create search function


