import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiCheckFill, RiEditBoxLine } from 'react-icons/ri'
import Avatar from '../assets/test-avatar.png'
const UserProfile = () => {
  const [avatar, setAvatar] = useState('Avatar')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <>
      <Link to={`/myposts/sdjf`}>My Posts</Link>
      <img src={avatar} alt="" />
      <form action="">
        <input
          type="file"
          name="avatar"
          id="avatar"
          onChange={e => e.target.files[0]}
          accept="png, jpg, jpeg"
        />
        <label htmlFor="avatar">
          <RiEditBoxLine className="w-6 h-6" />
        </label>
        <button>
          <RiCheckFill className="w-6 h-6" />
        </button>
      </form>
      <h1>Name of user</h1>
      <form action="">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={e => setCurrentPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Update details</button>
      </form>
    </>
  )
}

export default UserProfile
