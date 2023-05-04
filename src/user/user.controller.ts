import {
  Controller,
  Post,
  UseGuards,
  Request,
  Response,
  Get,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  // POST /login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req): Promise<any> {
    return {
      accessToken: (await this.authService.login(req.user)).token,
      user: req.user,
    }; // return req.user;
  }

  // Get user's details
  // @UseGuards(AuthenticatedGuard)
  @UseGuards(JwtAuthGuard)
  @Get()
  async getUser(@Request() req): Promise<any> {
    return await req.user;
  }
}
