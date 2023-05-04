import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
// import { UserService } from 'src/user/user.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  // constructor(private readonly userService: UserService) {
  //   super();
  // }

  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    done(null, user); // { id: user.id }
  }
  deserializeUser(
    payload: any,
    done: (err: Error, payload: string) => void,
  ): any {
    // const user = this.userService.findById(payload.id);
    done(null, payload); // user
  }
}
