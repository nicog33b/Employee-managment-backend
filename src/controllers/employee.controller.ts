import { Request, Response } from 'express';
import Employee from '../models/employee.model'; // Asegúrate de importar el modelo Employee adecuadamente

// Obtener todos los empleados
export const getAllEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener empleados' });
  }
};

// Obtener un empleado por su ID
export const getEmployeeById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el empleado' });
  }
};

// Agregar un nuevo empleado
export const addEmployee = async (req: Request, res: Response) => {
  const newEmployeeData = req.body;
  try {
    const employee = new Employee(newEmployeeData);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al agregar el empleado' });
  }
};

// Actualizar un empleado por su ID
export const updateEmployee = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedEmployeeData = req.body;
  try {
    const employee = await Employee.findByIdAndUpdate(id, updatedEmployeeData, {
      new: true,
    });
    if (!employee) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el empleado' });
  }
};

// Eliminar un empleado por su ID
export const deleteEmployee = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedEmployee = await Employee.findByIdAndRemove(id);
    if (!deletedEmployee) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el empleado' });
  }
};
