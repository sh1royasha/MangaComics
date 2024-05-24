import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import usersRoutes from './routes/manga.routes.js'
import users from './routes/user.routes.js'

const app = express();

app.use(morgan("dev"));

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended: true})); 

app.use("/api/v1", usersRoutes)

app.use("/api/v1", users)

export default app;