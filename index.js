// index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Task = require("./models/Task");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch(err => console.error("❌ Error al conectar a MongoDB:", err));

// Ruta para crear nueva tarea
app.post("/tasks", async (req, res) => {
  try {
    const { title, description } = req.body;

    // Validación
    if (!title || !description) {
      return res.status(400).json({ error: "El título y la descripción son obligatorios" });
    }

    const newTask = new Task({ title, description });
    await newTask.save();

    res.status(201).json(newTask);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al crear la tarea" });
  }
});

// Ruta para obtener todas las tareas
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find().select("title description -_id"); // Solo título y descripción
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener las tareas" });
  }
});

// Ruta raíz informativa
app.get("/", (req, res) => {
  res.json({
    message: "API de tareas — usa /tasks para GET (listar) y POST (crear)",
    endpoints: {
      list: "GET /tasks",
      create: "POST /tasks { title, description }"
    }
  });
});

// Manejador 404 para rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Manejador de errores centralizado
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
