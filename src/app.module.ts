import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './shemas/user.schema';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './services/app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'], // Hace que las variables estén disponibles globalmente
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DBUSER}:${process.env.DB_PASS}@cluster0.wok38ui.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
      {},
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
