// ========== REGISTER A NEW USER
// POST api/users/register
// UNPROTECTED
const registerUser = async (req, res, next) => {
  res.json("Register User")
}










// ========== LOGIN A REGISTER USER
// POST api/users/login
// PROTECTED
const loginUser = async (req, res, next) => {
  res.json("Login User")
}










// ========== USER PROFILE
// POST api/users/:id
// PROTECTED
const getUser = async (req, res, next) => {
  res.json("User Profile")
}










// ========== CHANGE USER AVATAR (profile picture)
// POST api/users/change-avatar
// PROTECTED
const changeAvatar = async (req, res, next) => {
  res.json("Change User Avatar")
}










// ========== EDIT USER DETAILS (from profile)
// POST api/users/edit-user
// PROTECTED
const editUser = async (req, res, next) => {
  res.json("Edit User Details")
}










// ========== USER AUTHORS
// POST api/users/authors
// UNPROTECTED
const getAuthors = async (req, res, next) => {
  res.json("Get all users/authors")
}










module.exports = {registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors }