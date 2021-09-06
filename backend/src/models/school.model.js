/**
 * Exercise: make School mongoose model
 * 
  export interface School {
  _id?:string;
  name:string;
  city: string;
  street: string;
  zipcode: number;
  classrooms?: string[];  // references for classroom entities
  }
 */

const mongoose = require('mongoose');

const SchoolSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    },
    classrooms: [{
        type: String,
        ref: 'Classroom'
    }]
}, {
    timestamps: true
});

module.exports = new mongoose.model('School', SchoolSchema, 'schools');