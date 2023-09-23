// Importa el paquete dotenv y carga las variables de entorno desde el archivo .env
import * as dotenv from 'dotenv';
dotenv.config();

// Importa mongoose para trabajar con MongoDB
import mongoose from 'mongoose';

// Obtiene la URL de conexión a la base de datos desde las variables de entorno
const dbUrl = process.env.MONGODB_URI as string;

// Función para conectar a la base de datos MongoDB
export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(dbUrl);
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error);
    throw error;
  }
};

// Llama a la función para conectar a la base de datos
connectToDatabase();
