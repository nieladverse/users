import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forRoot('mongodb+srv://users_admin:egmrZUxh9kGVntjY@cluster0.wok38ui.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
