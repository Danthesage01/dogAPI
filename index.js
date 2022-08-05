import fetchDogs from "./src/fetchDogs.js"
import { getElement, scrollToTop, paginate, displayBtns, darkMode } from "./src/utils.js";
import display from "./src/displayDogs.js";

const btnContainer = getElement(".btn-container")
let index = 0
let pages = []

const setupUI = () => {
  display(pages[index])
  displayBtns(btnContainer, pages, index)
}

const init = async () => {
  const dogs = await fetchDogs()
  pages = paginate(dogs)
  setupUI()
}

btnContainer.addEventListener("click", function (e) {
  const element = e.target
  if (element.classList.contains("btn-container")) return
  if (element.classList.contains("page-btn")) {
    index = parseInt(element.dataset.index)
  }
  if (element.classList.contains("next-btn") || (element.classList.contains("fa-chevron-right"))) {
    index++
    if (index > pages.length - 1) {
      index = 0
    }
  }
  if (element.classList.contains("prev-btn") || (element.classList.contains("fa-chevron-left"))) {
    index--
    if (index < 0) {
      index = pages.length - 1
    }
  }
  setupUI()
})




window.addEventListener("DOMContentLoaded", init)
scrollToTop()
darkMode()
