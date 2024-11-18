import { Controller, Module } from "@nestjs/common";
import { UsersController } from "./controllers/app.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./shemas/user.schema";
import { UsersService } from "./services/user.service";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),],
    exports: [UsersService],
})

export class UsersModule {}