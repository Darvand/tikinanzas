import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/users.entity';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}
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
}
