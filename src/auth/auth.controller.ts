import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { LOCAL_STRATEGY_KEY } from './strategies/local.strategy';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  @Post('login')
  @UseGuards(AuthGuard(LOCAL_STRATEGY_KEY))
  login(@Req() req: Request) {
    return req.user;
  }
}
