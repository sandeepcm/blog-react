import React, { useEffect, useMemo } from 'react'
import { getAllPost } from '../service/post'
import Posts from '../components/Posts'
import { Link } from 'react-router-dom'

const Home = () => {
  useMemo(() => {
    const data = getAllPost()
    console.log('data', data)
  }, [])

  return (
    <>
      <Posts />
    </>
  )
}

export default Home
