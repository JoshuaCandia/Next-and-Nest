import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from '@prisma/client';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    const tasks = await this.taskService.getAllTasks();
    if (!tasks) throw new NotFoundException('No tasks found');
    return tasks;
  }

  @Get(':id')
  async getTaskById(@Param('id') id: number) {
    try {
      const taskFound = await this.taskService.getTaskById(id);
      if (!taskFound) throw new NotFoundException('Task does not exist');
      return taskFound;
    } catch (error) {
      console.error(error);
    }
  }

  @Post()
  async createTask(@Body() data: Task): Promise<Task> {
    return this.taskService.createTask(data);
  }

  @Delete(':id')
  async deleteTaskById(@Param('id') id: number) {
    try {
      return await this.taskService.deleteTask(Number(id));
    } catch (error) {
      throw new NotFoundException('Tasks does not exist');
    }
  }

  @Put(':id')
  async updateTaskById(@Param('id') id: number, @Body() data: Task) {
    try {
      return this.taskService.updateTask(Number(id), data);
    } catch (error) {
      throw new NotFoundException('Task does not exist');
    }
  }
}
