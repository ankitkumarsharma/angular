export interface AuthType {
  login: LoginTypes;
  signup: SignupTypes;
}
export interface LoginTypes {
  username?: string,
  password?: string
}
export interface SignupTypes {
  name?: string,
  username?: string,
  emailId?: string,
  password?: string,
  ConfirmPassword?: string,
}