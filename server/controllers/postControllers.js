const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
const {v4: uuid} = require('uuid')

const User = require('../models/userModel')
const HttpError = require("../models/errorModel")

// ========== 1. CREATE POST
// POST api/posts
// UNPROTECTED
const createPost = async (req, res, next) => {
  res.json("Create post.")
}









// ========== 2. GET POSTS
// GET api/posts/:id
// UNPROTECTED
const getPosts = async (req, res, next) => {
  res.json("Get all posts.")
}










// ========== 3. GET SINGLE POST
// GET api/posts/:id
// UNPROTECTED
const getPost = async (req, res, next) => {
  res.json("Get single posts.")
}









// ========== 4. GET POSTS BY CATEGORY
// GET api/posts/categories/:categoryId
// UNPROTECTED
const getCategoryPosts = async (req, res, next) => {
  res.json("Get post by categories.")
}








// ========== 5. GET AUTHOR POSTS
// GET api/posts/users/:id
// UNPROTECTED
const getUserPosts = async (req, res, next) => {
  res.json("Get all author posts.")
}








// ========== 6. GET EDIT POST
// PATCH api/posts/users/:id
// PROTECTED
const editPost = async (req, res, next) => {
  res.json("Edit post")
}








// ========== 7. GET DELETE POST
// DELETE api/posts/users/:id
// PROTECTED
const deletePost = async (req, res, next) => {
  res.json("delete post")
}





module.exports = { createPost, getPosts, getPost, getCategoryPosts, getUserPosts, editPost, deletePost }