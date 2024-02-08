import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const authorData = [
  {
    id: '1',
    avatar:
      'https://gravatar.com/avatar/36e1ed3d729c7c9035085fe9e1483bf2?s=200&d=robohash&r=x',
    name: 'John Doe',
    posts: 3
  },
  {
    id: '2',
    avatar:
      'https://gravatar.com/avatar/48c6616b4cc56c5af1f24d3262facb26?s=200&d=robohash&r=x',
    name: 'Jane Smith',
    posts: 5
  },
  {
    id: '3',
    avatar:
      'https://gravatar.com/avatar/21a7e5272f79304f04d2d42956a1eeaf?s=200&d=robohash&r=x',
    name: 'Bob Johnson',
    posts: 2
  },
  {
    id: '4',
    avatar:
      'https://gravatar.com/avatar/3353423abb841295a29873dc6453aed5?s=200&d=robohash&r=x',
    name: 'Emily Brown',
    posts: 7
  },
  {
    id: '5',
    avatar:
      'https://gravatar.com/avatar/9c09908048e33988fcbb32094d86be98?s=200&d=robohash&r=x',
    name: 'Michael Wilson',
    posts: 1
  },
  {
    id: '6',
    avatar:
      'https://gravatar.com/avatar/e58deeeb1880707c1f0e8278deef4a16?s=200&d=robohash&r=x',
    name: 'Sarah Lee',
    posts: 4
  },
  {
    id: '7',
    avatar:
      'https://gravatar.com/avatar/36fec979840e2b1a8a7f25a9f2ac0070?s=200&d=robohash&r=x',
    name: 'David Kim',
    posts: 6
  },
  {
    id: '8',
    avatar:
      'https://gravatar.com/avatar/da94b39eb694dc6e42ffb9c19602fab9?s=200&d=robohash&r=x',
    name: 'Amanda Garcia',
    posts: 3
  },
  {
    id: '9',
    avatar:
      'https://gravatar.com/avatar/ff23efbb250da927fbd1ef41d38ee406?s=200&d=robohash&r=x',
    name: 'Alex Martinez',
    posts: 2
  },
  {
    id: '10',
    avatar:
      'https://gravatar.com/avatar/2ad5a2981088576c487f3516028d4771?s=200&d=robohash&r=x',
    name: 'Olivia Rodriguez',
    posts: 8
  }
]

const Authors = () => {
  const [authors, setAuthors] = useState(authorData)
  return (
    <div className="flex gap-4">
      {authors.length > 0 ? (
        <>
          {authors.map(({ id, avatar, name, posts }) => {
            return (
              <Link key={id} to={`/posts/users/${id}`}>
                <img src={avatar} alt={`Image of ${name}`} />
                <h4>{name}</h4>
                <p>{posts}</p>
              </Link>
            )
          })}
        </>
      ) : (
        'no author'
      )}
    </div>
  )
}

export default Authors
