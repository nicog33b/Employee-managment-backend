import * as dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
const app = express();



import employeeRoutes from './routes/employee.route';
import { connectToDatabase } from './database/database';


dotenv.config();
console.log(dotenv.config())
app.use(express.json());
app.use(cors());

//conexion base de datos
connectToDatabase();


// Usar las rutas de Employee
app.use('/api', employeeRoutes);


// Agrega tus rutas y controladores aquí

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

const result = dotenv.config();

