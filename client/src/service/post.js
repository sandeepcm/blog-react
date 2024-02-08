import axios from 'axios'

export const getAllPost = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  console.log('response', response)
  return response.data
}

export const getSinglePost = async ({ id }) => {
  const response = await axios.get(
    ` https://jsonplaceholder.typicode.com/posts/${id}`
  )
  console.log('response', response)
}
