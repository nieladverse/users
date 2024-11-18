import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(createUserDto: any): Promise<User> {
    try {
      const newUser = new this.userModel(createUserDto);
      return await newUser.save();
    } catch (error) {
      // Validaciones específicas de Mongoose
      if (error.name === 'ValidationError') {
        throw new BadRequestException(error.message); // Incluye el mensaje del esquema
      }
      if (error.code === 11000) {
        throw new BadRequestException('El email ya está registrado');
      }
      throw error;
    }
  }

  async findAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
