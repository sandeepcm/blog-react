import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="bg-blue-300 gap-5 flex flex-col p-4">
      <h1 className="text-xl">Page not found</h1>
      <Link href="./">Back to home</Link>
    </div>
  )
}

export default ErrorPage
