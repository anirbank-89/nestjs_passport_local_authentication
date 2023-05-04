import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);

    if (user && user.password === password) {
      const { username, password, ...rest } = user;
      return rest;
    }

    return { message: 'User not found' };
  }

  async login(user: any) {
    const payload = { name: user.name, sub: user.id };

    return { token: this.jwtService.sign(payload) };
  }
}
