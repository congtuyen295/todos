const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// @route GET api/todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json({ success: true, todos });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route POST api/todos
router.post("/", async (req, res) => {
  const { title, content } = req.body;

  if (!title)
    return res
      .status(400)
      .json({ success: false, message: "title is required" });

  try {
    const newTodo = new Todo({
      title,
      content,
    });
    await newTodo.save();
    res.json({
      success: true,
      message: "created todo successfully!",
      todo: newTodo,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route PUT api/todos/:id
router.put("/:id", async (req, res) => {
  const { title, content, completed } = req.body;

  if (!title)
    return res
      .status(400)
      .json({ success: false, message: "title is required" });

  try {
    let updatedTodo = {
      title,
      content: content || "",
      completed
    };

    const todoUpdateCondition = { _id: req.params.id };

    updatedTodo = await Todo.findOneAndUpdate(
      todoUpdateCondition,
      updatedTodo,
      { new: true }
    );

    res.json({
      success: true,
      message: "updated todo successfully",
      todo: updatedTodo,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route DELETE api/todos/:id
router.delete("/:id", async (req, res) => {
  try {
    const todoDeleteCondition = { _id: req.params.id };
    const deletedtodo = await Todo.findOneAndDelete(todoDeleteCondition);
    res.json({
      success: true,
      message: "deleted todo successfully",
      todo: deletedtodo,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
