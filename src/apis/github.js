import axios from 'axios'

const BASE_URL = 'https://api.github.com/users'

export const getUser = (user) => {
  return axios.get(`${BASE_URL}/${user}`)
}

export const getRepositories = (user) => {
  return axios.get(`${BASE_URL}/${user}/repos`)
}