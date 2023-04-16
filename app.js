import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/routes.js';
import dotenv from "dotenv";
dotenv.config();


const app = express();

app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/', routes);

// Puerto de escucha
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

