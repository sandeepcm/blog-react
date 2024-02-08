import React, { useState } from 'react'
import { DUMMY_POST } from '../data'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [posts, setPosts] = useState(DUMMY_POST)
  return (
    <>
      {posts.length > 0 ? (
        <>
          {posts.map(post => (
            <div key={post.id}>
              <img src={post.thumbnail} alt={`Image of ${post.title}`} />
              <Link to={`/posts/${post.id}`}>View</Link>
              <Link to={`/posts/${post.id}/edit`}>Edit</Link>
              <Link to={`/posts/${post.id}/delete`}>Delete</Link>
            </div>
          ))}
        </>
      ) : (
        'no'
      )}
    </>
  )
}

export default Dashboard
