import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { CreateUserService } from './services/create-user.service';
import { SignInUserService } from './services/signIn-user.service';
import { UserRepository } from './repository/user.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UserController],
  providers: [CreateUserService, SignInUserService, UserRepository],
})
export class UserModule {}
