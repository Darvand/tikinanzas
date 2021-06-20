import * as bcrypt from 'bcrypt';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './users.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  getUserByUuid(uuid: string) {
    return this.userRepo.findOne(uuid);
  }

  async create(userDto: CreateUserDto) {
    const password = await bcrypt.hash(userDto.password, 10);
    const user = this.userRepo.create({ ...userDto, password });
    return this.userRepo.save(user);
  }
}
