import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/users.entity';
import { PayloadToken } from './token.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}
  /**
   * @param  {string} email
   * @param  {string} password
   * Check if the credentials match. If so, returns the user.
   * @returns Promise<User>
   */
  async validate(email: string, password: string): Promise<User> {
    const user = await this.userService.findByEmail(email);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      return isMatch ? user : null;
    }
    return null;
  }

  async generateJwt(user: User) {
    const payload: PayloadToken = { sub: user.uuid };
    return {
      access_token: this.jwtService.sign(payload),
      user: { email: user.email, name: user.name, uuid: user.uuid },
    };
  }
}
