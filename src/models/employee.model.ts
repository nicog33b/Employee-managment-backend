// models/employee.model.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface Employee extends Document {
  name: string;
  position: string;
  level: 'junior' | 'mid' | 'senior';
}

const employeeSchema = new Schema<Employee>({
  name: { type: String,required:true },
  position: { type: String,required:true  },
  level: { type: String, enum: ['junior', 'mid', 'senior'],required:true },
});

export default mongoose.model<Employee>('Employee', employeeSchema);
