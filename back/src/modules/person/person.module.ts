import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonSchema } from './schemas/person.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CreatePersonService } from './services/create-person.service';
import { PersonRepository } from './repository/person.repository';
import { UpdatePersonService } from './services/update-person.service';
import { DeletePersonService } from './services/delete-person.service';
import { GetPeopleService } from './services/get-people.service';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Person', schema: PersonSchema }]),
    ThrottlerModule.forRoot([
      {
        ttl: 1000,
        limit: 10,
      },
    ]),
  ],
  controllers: [PersonController],
  providers: [
    CreatePersonService,
    PersonRepository,
    UpdatePersonService,
    DeletePersonService,
    GetPeopleService,
  ],
})
export class PersonModule {}
