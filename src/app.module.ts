import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, MongooseModule.forRoot(process.env.MONGO_URI)],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    console.log(process.env.MONGO_URI);
  }
}
