export class User {
  id: string;
  email: string;
  fullName: string;
  role: 'USER' | 'ADMIN';
  password: string;
}
