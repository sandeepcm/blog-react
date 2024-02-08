import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline'],
    ['link', 'image'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['blockquote', 'code-block'],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    ['clean']
  ]
}

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  'color',
  'background'
]

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Uncategorized')
  const [description, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const POST_CATEGORIES = [
    'Agriculture',
    'Business',
    'Entertainment',
    'Investment',
    'Uncategorized',
    'Weather'
  ]
  return (
    <div>
      <h1>Create Post</h1>
      <form action="">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          autoFocus
        />
        <select
          name="category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          {POST_CATEGORIES.map(category => (
            <option key={category}>{category}</option>
          ))}

          <button type="submit">Create</button>
        </select>
        <ReactQuill
          className="h-96"
          modules={modules}
          formats={formats}
          value={description}
          onChange={setDescription}
        />
        <input
          type="file"
          onChange={e => e.target.files[0]}
          accept="png, jpg, jpeg"
        />
      </form>
    </div>
  )
}

export default CreatePost
