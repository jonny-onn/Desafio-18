# Desafío 18 - API de Tareas (Node + Express + MongoDB)

API sencilla para crear y listar tareas. Implementada con Express y MongoDB (Mongoose).

Estado
- Rutas: `GET /tasks` (listar), `POST /tasks` (crear).
- Modelo: `Task` con `title` y `description`.

Requisitos
- Node.js 18+ (probado en Node 22)
- Cuenta/cluster MongoDB Atlas

Variables de entorno (.env)

Crear un archivo `.env` en la raíz (no incluir en el repo). Ejemplo en `.env.example`:

MONGO_URI=mongodb+srv://<user>:<password>@cluster0.wlfoke3.mongodb.net/taskdb
PORT=3000

Instalación y ejecución (PowerShell)

```powershell
cd C:\Users\jonam\Downloads\desafio18
npm install
npm start
```

Endpoints y ejemplos (PowerShell)

- GET / -> Información sobre la API
	```powershell
	curl http://localhost:3000/
	```

- GET /tasks -> Lista todas las tareas
	```powershell
	curl http://localhost:3000/tasks
	```

- POST /tasks -> Crear tarea (JSON)
	```powershell
	curl -Method POST -ContentType 'application/json' -Body '{ "title": "comprar comida", "description": "en la anonima" }' http://localhost:3000/tasks
	```

Notas de seguridad y buenas prácticas
- Nunca commitees credenciales (`.env`) — usa `.env.example` como plantilla. Ya añadimos `.gitignore` para excluir `node_modules` y `.env`.
- Si necesitas eliminar credenciales que ya se subieron, puedo guiarte para reescribir el historial (BFG/git filter-branch).

Posibles mejoras (siguientes pasos)
- Añadir validaciones más estrictas (p. ej. Joi / express-validator).
- Implementar rutas para actualizar / borrar tareas.
- Agregar tests automáticos y CI.

Contacto
- Si quieres, puedo:
	- limpiar el historial para eliminar la credencial del repo (operación destructiva),
	- añadir tests básicos y una ruta DELETE/PUT.

