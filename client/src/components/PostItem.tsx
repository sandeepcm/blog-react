import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import PostAuthor from './PostAuthor'

const PostItem = ({
  id,
  thumbnail,
  category,
  title,
  description,
  authorId,
  postId
}) => {
  const shortTitle = title.length > 30 ? title.substr(0, 30) + '...' : title
  const shortDescription =
    description.length > 145 ? description.substr(0, 145) + '...' : description
  console.log('shortTitle', shortTitle.length)

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/posts/${postId}`}>
        <img className="rounded-t-lg" src={thumbnail} alt={title} />
      </Link>
      <div className="p-5">
        <a href={`/posts/${postId}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {shortTitle}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {shortDescription}
        </p>
        <PostAuthor />
        <Link to={`/posts/categories/${category}`}>{category}</Link>
      </div>
    </div>
  )
}

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  authorId: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired
}

export default PostItem
