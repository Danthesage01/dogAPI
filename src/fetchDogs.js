import { AUrlWithKey } from "./utils.js";


const fetchDogs = async ()=>{
  const res = await fetch(AUrlWithKey)
  const data = await res.json()
  return data
}

export default fetchDogs