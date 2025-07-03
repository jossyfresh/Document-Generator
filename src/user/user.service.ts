import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

const prisma = new PrismaClient();

enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    return prisma.user.create({
      data: {
        fullName: createUserDto.fullName,
        email: createUserDto.email,
        password: hashedPassword,
        role: Role.ADMIN,
      },
    });
  }
  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }
  async findById(id: string) {
    return prisma.user.findUnique({
      where: { id },
    });
  }
}
