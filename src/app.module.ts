import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'], // Hace que las variables estén disponibles globalmente
    }),
    UsersModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DBUSER}:${process.env.DB_PASS}@cluster0.wok38ui.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
      {},
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
