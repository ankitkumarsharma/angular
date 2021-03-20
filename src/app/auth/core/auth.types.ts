export interface AuthType {
  login: LoginTypes | null;
  user: UserTypes[];
  isAuth: boolean;
  errorMessage: string | null;
}
export interface LoginTypes {
  username?: string,
  password?: string
}
export interface UserTypes {
  name?: string,
  username?: string,
  emailId?: string,
  password?: string,
}