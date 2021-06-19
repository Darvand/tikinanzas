import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateTransferenceDto,
  GetTransferencesDto,
} from './transferences.dto';
import { Transference } from './transferences.entity';

@Injectable()
export class TransferencesService {
  constructor(
    @InjectRepository(Transference)
    private transferenceRepo: Repository<Transference>,
  ) {}

  async getAll() {
    const transferences = await this.transferenceRepo.find();
    return transferences.map(
      (transference) => new GetTransferencesDto(transference),
    );
  }

  create(transferenceDto: CreateTransferenceDto) {
    const transference = this.transferenceRepo.create(transferenceDto);
    console.log(transferenceDto, transference);
    return this.transferenceRepo.save(transference);
  }
}
