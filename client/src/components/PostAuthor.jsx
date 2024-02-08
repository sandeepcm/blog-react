import React from 'react'
import { Link } from 'react-router-dom'

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/sdfsdf`}>
      <img
        className="w-10 h-10 rounded-full"
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        alt="Rounded avatar"
      ></img>
    </Link>
  )
}

export default PostAuthor
