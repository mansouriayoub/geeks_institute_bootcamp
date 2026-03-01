// const mongoose = require('mongoose');
import mongoose from 'mongoose';


// Exercise 1: The Connection Handshake
mongoose.connect('mongodb://localhost:27017/collegeDB')
  .then(() => console.log('✅ Connection Successful! Node.js is talking to MongoDB.'))
  .catch(err => console.error('❌ Connection Failed:', err));

/*
Exercise 2: The Student Blueprint (Schema)
*/
const studentSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "must add name"],
  },
  email:{
    type: String,
    required: [true, 'must write email'],
  },
  age:{
    type:Number,
    min: [18, 'must be at least 18']
  }
},
{
  timestamps: true
})

const Student = mongoose.model('Student', studentSchema);

const testStudent = async () => {
  try {
    const student = new Student({
      name: "Omar",
      email: "omar@school.com",
      age: 16 // This should trigger an error!
    });
    await student.save();
  } catch (error) {
    console.log("Validation Error Caught:", error.message);
  }
};

console.log(testStudent()); //Validation Error Caught: Student validation failed: age: must be at least 18

const newStudent = async()=>{
  try {

    const student = new Student({
      name: 'Alaa',
      email: 'alaa@mail.com',
      age: 19
    });
    await student.save();
  } catch (error) {
    console.error("Validation Error Caught:", error.message);
  }
}

console.log(newStudent());