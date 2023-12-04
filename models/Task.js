const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  workspace: {
    type: Object,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  assignedUser: {
    type: Object,
    required: true
  },
  todos: {
    type: Array,
    required: true
  },
  company: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Task', taskSchema)