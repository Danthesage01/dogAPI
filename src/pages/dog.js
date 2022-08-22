import { getElement, scrollToTop, paginate, displayBtns, darkMode } from "../utils.js"

// const loading = getElement(".page-loading")

const centerDOM = getElement(".single-product-center")
const pageTitleDOM = getElement('.page-hero-title');
const nameDOM = getElement(".single-title")
const bredDOM = getElement(".single-bred")
const spanDOM = getElement(".single-lspan")
const heightDOM = getElement(".single-height")
const weightDOM = getElement(".single-weight")
const breedDOM = getElement(".single-breed")
const originDOM = getElement(".single-origin")

window.addEventListener("DOMContentLoaded", async()=>{

  const paramID = window.location.search
  const param = new URLSearchParams(paramID)
  const id = param.get("id")

  // const SUrlWithKEy = `https://api.thedogapi.com/v1/breeds/${id}?api_key=55c5f676-1493-44f7-ad67-0b870beba21e`
  const SUrlWithKEy = `https://api.thedogapi.com/v1/breeds/${id}?api_key=live_v2KEMvu1br7NSCNSVo6gxNToDniBMahHC7ZsEJevhxj1qRbuJKm6rBqBCIoxfe9J/`
  try {
    const res = await fetch(SUrlWithKEy)
    if (res.ok === true && res.status === 200) {
    const dog = await res.json()
      const { bred_for, breed_group, height,weight, life_span, name, origin} =dog
      pageTitleDOM.textContent = `/ ${name}`
      document.title = `${name}`
      nameDOM.textContent = `Name: ${name}`
      bredDOM.textContent = `Bred for: ${bred_for}.`
      spanDOM.textContent = `Life Span: ${life_span}.`
      heightDOM.textContent = `Height: ${height.metric}cm.`
      weightDOM.textContent = `Weight: ${weight.metric}kg.`
      // genderDOM.textContent = `Bred for: ${bred_for}.`
      if(breed_group == undefined || breed_group == ""){
        return
      }
      else{
        breedDOM.textContent = `Breed Group: ${breed_group}.`
      }
    
      if(origin== undefined || origin == ""){
        return
      }else{
        originDOM.textContent = `Origin: ${origin}.`
      }
 
  }
  } 
  catch (error) {
      console.log(error);
  }
})
darkMode()

