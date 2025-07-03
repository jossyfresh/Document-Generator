import { SetMetadata } from '@nestjs/common';
export const Roler_Key = 'roles';
export const Roles = (...roles: string[]) => {
  return SetMetadata(Roler_Key, roles);
};
