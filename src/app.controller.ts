import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createUser(@Body() createUserDto: any) {
    return this.appService.createUser(createUserDto);
  }

  @Get()
  async findAllUsers() {
    return this.appService.findAllUsers();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
