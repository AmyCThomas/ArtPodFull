import axios from "axios"
import apiHelpers from "./ApiHelpers"
const ArtPodAPI = {}
const BASE_URL = "http://127.0.0.1:8000" // Backend

// Authentication methods
ArtPodAPI.signup = async (signupData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/users/`, signupData, apiHelpers.getCsrfConfig())
  )
}

ArtPodAPI.login = async (loginData) => {
  console.log(loginData)
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/login/`, loginData, apiHelpers.getCsrfConfig())
  )
}

ArtPodAPI.logout = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/logout/`, null, apiHelpers.getCsrfConfig())
  )
}

// Get items
ArtPodAPI.getAllItems = async (item) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/${item}/`, apiHelpers.getCsrfConfig)
  )
}

// Get item by id
ArtPodAPI.getItemById = async (item, itemId) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/${item}/${itemId}/`, apiHelpers.getCsrfConfig())
  )
}

// Create items
ArtPodAPI.createItems = async (item, itemData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/${item}/`, itemData, apiHelpers.getCsrfConfig())
  )
}

// Edit items
ArtPodAPI.editItems = async (item, itemId, itemData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.patch(`${BASE_URL}/${item}/${itemId}/`, itemData, apiHelpers.getCsrfConfig())
  )
}

// Delete item
ArtPodAPI.deleteItem = async (item, itemId) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.delete(`${BASE_URL}/${item}/${itemId}/`, apiHelpers.getCsrfConfig())
  )
}
export default ArtPodAPI.js