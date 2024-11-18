import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import { AppService } from 'src/services/app.service';
import { User } from 'src/shemas/user.schema';

/**
 * Controller for handling user-related API endpoints.
 */
@Controller('users')
export class AppController {
  /**
   * Injects the application service into the controller.
   * @param appService - The service responsible for user-related operations.
   */
  constructor(private readonly appService: AppService) {}

  /**
   * Endpoint to create a new user.
   * @param createUserDto - The data required to create a user.
   * @returns The created user document.
   */
  @Post()
  async createUser(@Body() createUserDto: any) {
    return this.appService.createUser(createUserDto);
  }

  /**
   * Endpoint to retrieve all users.
   * @returns An array of all user documents.
   */
  @Get()
  async findAllUsers() {
    return this.appService.findAllUsers();
  }

  /**
   * Endpoint to retrieve a specific user by their ID.
   * @param id - The unique identifier of the user.
   * @returns The user document if found.
   */
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.appService.findOne(id);
  }

  /**
   * Endpoint to delete a specific user by their ID.
   * @param id - The unique identifier of the user.
   * @returns A 204 HTTP status code for a successful deletion.
   */
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // Sends a 204 status code for successful deletions.
  async delete(@Param('id') id: string): Promise<void> {
    await this.appService.delete(id);
  }

  /**
   * Endpoint to update a user's details.
   * @param id - The unique identifier of the user.
   * @param updateUserDto - The fields to update (e.g., username, email, password).
   * @returns The updated user document.
   */
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.appService.update(id, updateUserDto);
  }
}
