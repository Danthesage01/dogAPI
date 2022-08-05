import { getElement } from "./utils.js"

const productContainer = getElement(".products-container")
const display = (dogs)=>{
productContainer.innerHTML = dogs.map(dog=>{
  const { id,  name } = dog
  const { url:image } = dog.image
  return `<article class="product">
        <div class="product-container">
          <img src="${image}" class="product-img img" alt="${name}">
          <div class="product-icons">
            <a href="dog.html?id=${id}" class="product-icon">
              <i class="fas fa-search"></i>
            </a>
          </div>
          <div class="product-name-container">
            <p class="product-name">${name}</p>
          </div>
        </div>
      </article>`
}).join("")
}

export default display

