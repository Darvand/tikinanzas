import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CheckUserPipe } from './check-user.pipe';
import { CreateTransferenceDto } from './transferences.dto';
import { TransferencesService } from './transferences.service';
import { JWT_STRATEGY_KEY } from 'src/auth/strategies/jwt.strategy';

@ApiTags('transferences')
@UseGuards(AuthGuard(JWT_STRATEGY_KEY))
@Controller('transferences')
export class TransferencesController {
  constructor(private transferencesService: TransferencesService) {}

  @Get()
  @ApiOperation({ summary: 'List of all transferences' })
  getTransferences() {
    return this.transferencesService.getAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a transference' })
  create(@Body(CheckUserPipe) payload: CreateTransferenceDto) {
    return this.transferencesService.create(payload);
  }
}
