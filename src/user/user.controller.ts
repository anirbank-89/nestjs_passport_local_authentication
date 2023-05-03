import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // POST /login
  @Post('login')
  async login(): Promise<any> {
    return {};
  }
}
