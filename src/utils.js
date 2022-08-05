const URL = "https://api.thedogapi.com/v1/breeds"

const APIKey = "api_key=55c5f676-1493-44f7-ad67-0b870beba21e"

const AUrlWithKey = "https://api.thedogapi.com/v1/breeds?api_key=55c5f676-1493-44f7-ad67-0b870beba21e/"
const SUrlWithKEy = `https://api.thedogapi.com/v1/breeds/1?api_key=55c5f676-1493-44f7-ad67-0b870beba21e`

// Custom getElement
const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) {
    return element
  }
  throw new Error(`Please check "${selection}" selector. No such element exist!`)
}

//scroll to top 
function scrollToTop() {
  const topScroll = getElement(".top-link")
  window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset
    if (scrollHeight > 500) {
      topScroll.classList.add("show-toplink")
    } else {
      topScroll.classList.remove("show-toplink")
    }
  })
  topScroll.addEventListener("click", e => {
    e.preventDefault()
    const id = e.target.getAttribute("href")
    const element = getElement(id)
    let position = element.offsetTop - 62

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth"
    })
  })
}

const paginate = (dogs) => {
  const dogsPerPage = 30
  const noOfPages = Math.ceil(dogs.length / dogsPerPage)
  const newDogs = Array.from({ length: noOfPages }, (_, index) => {
    const start = index * dogsPerPage
    return dogs.slice(start, start + dogsPerPage)
  })
  return newDogs
}

const displayBtns = (element, pages, activeIndex) => {
  let buttons = pages.map((_, pageIndex) => {
    return `<button class="page-btn ${activeIndex === pageIndex ? "active-btn" : "null"}" data-index="${pageIndex}">
  ${pageIndex + 1}</button>
  `
  })
  buttons.unshift(` <button class="prev-btn">
        <i class="fa-solid fa-chevron-left"></i>
      </button>`)
  buttons.push(` <button class="next-btn">
        <i class="fa-solid fa-chevron-right"></i>
      </button>`)
  element.innerHTML = buttons.join("")
}


function darkMode() {
  const body = getElement(".body")
  const toggleBtn = getElement(".toggle-btn")
  toggleBtn.addEventListener("click", function (e) {
    if (e.target) {
      body.classList.toggle("dark-theme")
    }
  })
}

export {
  getElement,
  scrollToTop,
  AUrlWithKey,
  paginate,
  displayBtns,
  darkMode
}