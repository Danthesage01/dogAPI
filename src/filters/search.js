// import { getElement, displayBtns } from "../utils.js";
// import display from "../displayDogs.js";

// const formInput = getElement(".input-form")
// const searchInput = getElement(".search-input")
// const btnContainer = getElement(".btn-container")



// const searchSetup = (dogs) =>{
// formInput.addEventListener("keyup", function (){
//   const searchValue = searchInput.value
//   const filteredDogs = dogs.filter(dog=>{
//     let {name} = dog
//     name = name.toLowerCase()
//     if(name.includes(searchValue)){
//      return dog
//     }
//   })
//   display(filteredDogs)

//   if (filteredDogs.length < 1) {
//     const productsDOM = getElement('.products-container')
//     productsDOM.innerHTML = `
//               <h3 class="filter-error">
//               Hey Buddy!
//               <br>
//                 No dogs with such a name. 
//                 <br> 
//                 Please check back later. 
//               </h3>
//      `
//     btnContainer.innerHTML = null
//     }
//   else {
//     display(dogs)
//   }
// })
// }
// export default searchSetup