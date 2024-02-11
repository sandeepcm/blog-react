const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
const {v4: uuid} = require('uuid')

const User = require('../models/userModel')
const Post = require('../models/postModel')
const HttpError = require("../models/errorModel")

// ========== 1. CREATE POST
// POST api/posts
// UNPROTECTED
const createPost = async (req, res, next) => {
  try {
    let { title, category, description } = req.body;
    if(!title || !category || !description || !req.files) {
      return next(new HttpError("Fill in all fields and choose thumbnail." ,422))
    }
    const {thumbnail} = req.files;
    // Check the files size
    if(thumbnail.size > 2000000){
      return next(new HttpError("The image file size is too big it should be less than 2MB"))
    }
    let fileName = thumbnail.name;
    let splittedFileName = fileName.split('.')
    let newFileName = splittedFileName[0] + uuid() + "." + splittedFileName[splittedFileName.length - 1]

    thumbnail.mv(path.join(__dirname, '..', 'uploads', newFileName), async (err) => {
      if (err) {
        return next(new HttpError(err));
      } else {
        const newPost = await Post.create({ title, category, description, thumbnail: newFileName, creator: req.user.id });
        if (!newPost) {
          return next(new HttpError("Post could not be created.", 422));
        }
        // find user and increase post count by 1
        const currentUser = await User.findById(req.user.id);
        const userPostCount = currentUser.posts + 1;
        await User.findByIdAndUpdate(req.user.id, { posts: userPostCount });
        res.status(201).json(newPost)
      }
    })
  } catch (error) {
    return next(new HttpError(error))
  }
}









// ========== 2. GET POSTS
// GET api/posts/:id
// UNPROTECTED
const getPosts = async (req, res, next) => {
  try {
      const posts = await Post.find().sort({updatedAt: -1})
      res.status(200).json(posts)
  } catch (error) {
    return next(new HttpError(error))
  }
}










// ========== 3. GET SINGLE POST
// GET api/posts/:id
// UNPROTECTED
const getPost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    if(!post){
      return(new HttpError("Post not found", 404 ))
    }
  } catch (error) {
    return next(new HttpError(error))
  }
}









// ========== 4. GET POSTS BY CATEGORY
// GET api/posts/categories/:category
// UNPROTECTED
const getCategoryPosts = async (req, res, next) => {
  try {
    const {category} = req.params;
    const categoryPosts = await Post.find({category}).sort({updatedAt: -1})
    res.status(200).json(categoryPosts)
  } catch (error) {
    return next(new HttpError(error))
  }
}








// ========== 5. GET AUTHOR POSTS
// GET api/posts/users/:id
// UNPROTECTED
const getUserPosts = async (req, res, next) => {
  try {
    const {id} = req.params;
    const authorPosts = await Post.find({creator: id}).sort({createdAt: -1});
    res.status(200).json(authorPosts)
  } catch (error) {
    return next(new HttpError(error))
  }
}








// ========== 6. GET EDIT POST
// PATCH api/posts/users/:id
// PROTECTED
const editPost = async (req, res, next) => {
  try {
    let fileName;
    let newFileName;
    let updatePost;
    const postId = req.params.id;
    let {title, category, description}= req.body;

    if(!title, !category, description.length > 12) {
      return next(new HttpError("Fill in all fields.", 422))
    }
    if(!req.files) {
      updatedPost = await Post.findByIdAndUpdate(postId, {title, category, description}, {new: true})
    } else {
      // get old thumbnail from upload
      const oldPost = await Post.findById(postId);
      fs.unlink(path.join(__dirname, '..', 'uploads', oldPost.thumbnail), async (err) => {
        if(err){
          return next(new HttpError(err))
        }
      })
    }
    // upload new thumbnail
    const thumbnail = req.files;
    // check file size
    if(thumbnail.size > 2000000) {
      return next(new HttpError("Thumbnail is too big should be less than 2MB"))
    }
    fileName = thumbnail.name;
    let splittedFileName = fileName.split('.');
    newFileName = splittedFileName[0] + uuid() + '.' + splittedFileName[splittedFileName.length - 1];

    thumbnail.mv(path.join(__dirname, '.', 'uploads', newFileName), async (err) => {
      if(err) {
        return next(new HttpError(err))
      }
    })
    updatePost = await Post.findByIdAndUpdate(postId, {title, description, thumbnail: newFileName}, {new: true})
    if(!updatePost){
      return next(new HttpError("Could not update the post", 400))
    }
    res.status(200).json(updatePost)
  } catch (error) {
    return next(new HttpError(error))
  }
}








// ========== 7. GET DELETE POST
// DELETE api/posts/users/:id
// PROTECTED
const deletePost = async (req, res, next) => {
  try {
    
  } catch (error) {
    return next(new HttpError(error))
  }
}





module.exports = { createPost, getPosts, getPost, getCategoryPosts, getUserPosts, editPost, deletePost }