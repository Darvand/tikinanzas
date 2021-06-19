import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsUUID } from 'class-validator';
import { User } from 'src/users/users.entity';
import {
  CATEGORIES,
  Category,
  CategoryName,
  Source,
  SourceName,
  SOURCES,
  Transference,
} from './transferences.entity';

export class GetTransferencesDto {
  @ApiProperty()
  readonly uuid: string;
  @ApiProperty()
  readonly amount: number;
  @ApiProperty()
  readonly source: Source;
  @ApiProperty()
  readonly date: Date;
  @ApiProperty()
  readonly category: Category;

  constructor(transference: Transference) {
    this.uuid = transference.uuid;
    this.amount = transference.amount;
    this.category = CATEGORIES[transference.category];
    this.source = SOURCES[transference.source];
    this.date = transference.date;
  }
}

export class CreateTransferenceDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly amount: number;

  @ApiProperty()
  @IsEnum(SourceName, {
    message: `source should be one of ${Object.values(SourceName)}`,
  })
  @IsNotEmpty()
  readonly source: SourceName;

  @ApiProperty()
  @IsEnum(CategoryName, {
    message: `category should be one of ${Object.values(CategoryName)}`,
  })
  @IsNotEmpty()
  readonly category: CategoryName;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  readonly date: Date;

  @IsUUID()
  @IsNotEmpty()
  readonly userUuid: string;

  readonly user: User;
}
