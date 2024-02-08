import React, { useState } from 'react'
import { DUMMY_POST } from '../data'
import PostItem from '../components/PostItem'

const CategoryPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POST)
  return (
    <>
      {posts.length > 0 ? (
        <section className="flex gap-6">
          {posts.map(
            ({ id, thumbnail, category, title, description, authorId }) => (
              <PostItem
                key={id}
                id={id}
                thumbnail={thumbnail}
                category={category}
                title={title}
                description={description}
                authorId={authorId}
              />
            )
          )}
        </section>
      ) : (
        'no post'
      )}
    </>
  )
}

export default CategoryPosts
