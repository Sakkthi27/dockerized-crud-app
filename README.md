## 📄 `Dockerized-CRUD-Application`

```markdown
# 🚀 Dockerized Full Stack CRUD App (Node.js + MongoDB + React)

A full-stack CRUD application built with **Node.js**, **MongoDB**, and **React**, all running inside **Docker containers**. Mongo Express is included for easy database management via browser.

---

## 📦 Stack

- **Frontend**: React
- **Backend**: Node.js (Express)
- **Database**: MongoDB
- **DB GUI**: Mongo Express
- **Containerization**: Docker + Docker Compose

---

## 🌐 Live URLs (Local)

| Service          | URL                         |
|------------------|-----------------------------|
| Frontend (React) | http://localhost:3001       |
| Backend (API)    | http://localhost:3000/items |
| Mongo Express    | http://localhost:8081       |
| MongoDB Port     | `27017` (local access)

---

## 📁 Project Structure



docker-crud-app/
├── backend/               # Express server & Mongo models
│   ├── models/            # Mongoose schemas
│   └── server.js          # Main server file
│
├── frontend/              # React frontend
│   ├── public/            # Static files
│   └── src/               # React components & logic
│       ├── App.js
│       └── index.js
│
├── .env                   # Environment variables
├── Dockerfile             # Dockerfile for backend
├── docker-compose.yml     # Multi-container configuration
└── README.md              # You're here!




---

## ⚙️ How to Run

### 1. 📥 Clone the Repository

```bash
git clone https://github.com/your-username/docker-crud-app.git
cd docker-crud-app
````

### 2. 🛠 Create `.env` File

Create a `.env` file in the root:

```env
# MongoDB
MONGO_INITDB_DATABASE=cruddb
MONGO_URI=mongodb://mongo:27017/cruddb

# Backend
PORT=3000

# Frontend
FRONTEND_PORT=3001
REACT_APP_API_URL=http://localhost:3000/items

# Mongo Express
ME_CONFIG_MONGODB_SERVER=mongo
ME_CONFIG_BASICAUTH_USERNAME=admin
ME_CONFIG_BASICAUTH_PASSWORD=admin
```

### 3. 🐳 Run Docker Containers

```bash
docker-compose --env-file .env up --build
```

> This builds and starts all containers: frontend, backend, mongo, mongo-express.

---

## 🔍 API Endpoints

| Method | Endpoint     | Description   |
| ------ | ------------ | ------------- |
| GET    | `/items`     | Get all items |
| POST   | `/items`     | Create item   |
| PUT    | `/items/:id` | Update item   |
| DELETE | `/items/:id` | Delete item   |

---

## 📸 Screenshots

<details>
<summary>Frontend UI</summary>

![React Frontend UI](screenshots/ui.png)

</details>

<details>
<summary>Mongo Express UI</summary>

![Mongo Express UI](screenshots/mongoexpress.png)

</details>



---

## 🧹 Clean Up

To stop and remove all containers:

```bash
docker-compose down
```

To remove volumes too:

```bash
docker-compose down -v
```

---

## 🧠 Future Improvements

* Add form validation
* Use MongoDB auth with users
* Add unit tests (Jest, Supertest)
* Add persistent storage volumes for MongoDB
* Deploy on EC2 or Render

---

## 📜 License

MIT License © [Sakkthivel](https://github.com/sakkthi27)

```

---


