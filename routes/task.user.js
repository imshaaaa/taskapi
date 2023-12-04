const router = require('express')()
const Workspace = require('../models/Workspace')
const Task = require('../models/Task')
const User = require('../models/User')

router.post('/get-task', async (req, res) => {
  const { userId } = req.body
  try {
    let tasks = await Task.find()
    let allTask = tasks.filter(task => task.assignedUser.id == userId)
    res.send(allTask)
  } catch(err) {
    res.status(500).send(err)
  }
})

module.exports = router