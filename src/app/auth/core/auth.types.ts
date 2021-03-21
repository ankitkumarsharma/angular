export interface AuthType {
  user: UserTypes[];
  isAuth: boolean;
  currentUser: UserTypes | null;
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