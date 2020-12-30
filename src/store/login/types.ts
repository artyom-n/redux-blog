export const VALIDATED_USER = 'VALIDATED_USER'

export interface UserState {
  user: User[] 
}

export type ValidateUser = {
  type: typeof VALIDATED_USER,
  user: User[]
}

export type User = {
  firstName: string,
  secondName: string,
  password: string,
  type: string
}

export type LoginInfo = {
  firstName: string,
  secondName: string,
  password: string
}