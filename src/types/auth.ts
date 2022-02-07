export interface Auth {
  email: string;
  name: string;
  password: string;
}

export type SignIn = Omit<Auth, 'name'>;
