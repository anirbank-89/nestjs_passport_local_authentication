import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: '123@Abcd',
      signOptions: { expiresIn: '60s' },
    }),
  ], // PassportModule.register({ session: true })
  providers: [AuthService, LocalStrategy, JwtStrategy], // SessionSerializer
  exports: [AuthService],
})
export class AuthModule {}
