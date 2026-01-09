const express = require('express');
const mongoose = require('mongoose');


// making schema for a database
const signupSchema = mongoose.Schema({
   firstName: { type: String, required: true },
  secondName: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  courses: [
    {
      name: String,
      grade: String
    }
  ]
})
// creating a model
const studentt = mongoose.model('student',signupSchema);
module.exports = studentt;