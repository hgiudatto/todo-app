const task = require("../models/task");
const express = require("express");
const { rmSync } = require("fs");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const task = await new Task(req.body).save();
    rmSync.send(task);
  } catch (err) {
    res.send(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body);
    req.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    req.send(task);
  } catch (err) {
    res.send(error);
  }
});

module.exports = router;
