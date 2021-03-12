
require('dotenv').config();
const express = require('express')
const router = express.Router();
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
const cloudinary = require('cloudinary');

// Databse
const db = require('../models')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

router.post('/', multipartMiddleware, (req, res)=> {
  console.log('in the image test route')
  console.log('req.files', req.files)
  console.log('this is the req.files.image.path')
  console.log(req.files.image.path);
  console.log('***********************')
  let body = (req.body);
  cloudinary.uploader.upload(req.files.image.path, function(result) {
    console.log('from cloudinary', result);
    res.json({ url: result.secure_url })
  })
})

module.exports = router;