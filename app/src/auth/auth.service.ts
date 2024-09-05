import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signIn(email: string, password: string) {
    const user = await this.userService.findOneByEmail(email);
    if(!user) throw new NotFoundException('User not found');

    const match = await bcrypt.compare(password, user.password);

    console.log(match);

    return match;
  }
}
