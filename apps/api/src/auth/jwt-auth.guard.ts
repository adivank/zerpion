import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from './public/public-constants';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
