export const VALIDATE_USER = 'VALIDATE_USER'

export interface UserState {
  users: User[]
}

export type ValidateUser = {
  type: typeof VALIDATE_USER,
  payload: LoginInfo
}

export type LoginInfo = {
  firstName: string,
  secondName: string,
  password: string
}

export type User = {
  firstName: string,
  secondName: string,
  password: string,
  loggedIn: boolean,
  type: string
}