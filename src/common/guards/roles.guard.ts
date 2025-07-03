import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roler_Key } from '../decorator/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>(Roler_Key, context.getHandler());
    if (!roles) {
      return true; // If no roles are defined, allow access
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user; // Assuming user is attached to the request

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return user && roles.includes(user.role); // Check if user's role is in the allowed roles
  }
}
