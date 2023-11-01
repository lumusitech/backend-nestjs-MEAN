import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { userSchema } from './entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SEED,
      signOptions: { expiresIn: '6h' },
    }),
    MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
