import axios from 'axios'

const API_URL = '/api/scores/'

// Create new goal
const postCLScore = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, postData, config)

  return response.data
}

// Get user goals
const getScores = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL, config)

  return response.data
}

const postTScore = async (postData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    } 
    const response = await axios.post(API_URL, postData, config)
    return response.data
}
const scoreService = {
    postCLScore,
    postTScore,
    getScores,
}

export default scoreService
