import { Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateTransferenceDto } from './transferences.dto';
import { TransferencesService } from './transferences.service';

@Injectable()
export class CheckUserPipe implements PipeTransform {
  constructor(
    private usersService: UsersService,
    private transferService: TransferencesService,
  ) {}

  async transform(value: CreateTransferenceDto) {
    const user = await this.usersService.getUserByUuid(value.userUuid);
    if (!user) {
      throw new NotFoundException(`User with uuid ${value.userUuid} not found`);
    }
    return this.transferService.create({ ...value, user });
  }
}
