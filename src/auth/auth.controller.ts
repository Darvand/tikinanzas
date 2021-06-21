import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { LOCAL_STRATEGY_KEY } from './strategies/local.strategy';
import { AuthService } from './auth.service';
import { User } from 'src/users/users.entity';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  @UseGuards(AuthGuard(LOCAL_STRATEGY_KEY))
  login(@Req() req: Request) {
    const user = req.user as User;
    return this.authService.generateJwt(user);
  }
}
