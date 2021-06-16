import { ApiProperty } from '@nestjs/swagger';
import { Category, Source } from './transferences.entity';

export class GetTransferencesDto {
  @ApiProperty()
  readonly uuid: string;
  @ApiProperty()
  readonly amount: number;
  @ApiProperty()
  readonly source: Source;
  @ApiProperty()
  readonly date: string;
  @ApiProperty()
  readonly category: Category;
}
