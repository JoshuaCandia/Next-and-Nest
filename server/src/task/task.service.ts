import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private Prisma: PrismaService) {}

  async getAllTasks(): Promise<Task[]> {
    return this.Prisma.task.findMany();
  }

  async getTaskById(id: number): Promise<Task> {
    return this.Prisma.task.findUnique({
      where: {
        id: Number(id),
      },
    });
  }

  async createTask(data: Task): Promise<Task> {
    return this.Prisma.task.create({
      data,
    });
  }

  async updateTask(id: number, data: Task): Promise<Task> {
    return this.Prisma.task.update({
      where: {
        id: id,
      },
      data,
    });
  }
  async deleteTask(id: number): Promise<Task> {
    return this.Prisma.task.delete({
      where: {
        id: id,
      },
    });
  }
}
