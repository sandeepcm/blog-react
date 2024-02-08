import React, { useState } from 'react'
import PostItem from './PostItem'
import { DUMMY_POST } from '../data'

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POST)
  return (
    <>
      {posts.length > 0 ? (
        <section className="flex gap-6">
          {posts.map(
            ({
              id,
              thumbnail,
              category,
              title,
              description,
              authorId,
              postId
            }) => (
              <PostItem
                key={id}
                postId={id}
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
export default Posts
