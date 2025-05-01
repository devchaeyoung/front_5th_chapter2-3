import { z } from 'zod'
import { userDetailSchema } from './schemas/userSchema'

export type User = Pick<UserDetail, 'id' | 'image' | 'username'>
export type UserDetail = z.infer<typeof userDetailSchema>

export interface Coordinates {
  lat: number
  lng: number
}

export interface Address {
  address: string
  city: string
  state: string
  stateCode: string
  postalCode: string
  country: string
  coordinates: Coordinates
}

export interface Company {
  name: string
  title: string
  department: string
  address: Address
}

export interface Bank {
  cardNumber: string
  cardType: string
  cardExpire: string
  currency: string
  iban: string
}

export interface Hair {
  color: string
  type: string
}
