// models/Task.js
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "El título es obligatorio"]
  },
  description: {
    type: String,
    required: [true, "La descripción es obligatoria"]
  }
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);
