export type User = Pick<UserDetail, 'id' | 'image' | 'username'>

export interface UserDetail {
  id: number
  username: string
  password: string
  email: string
  firstName: string
  lastName: string
  maidenName: string
  gender: string
  image: string
  birthDate: string
  bloodGroup: string
  eyeColor: string
  hair: Hair
  height: number
  weight: number
  age: number
  ip: string
  macAddress: string
  phone: string
  ssn: string
  university: string
  userAgent: string
  role: string

  address: Address
  company: Company
  bank: Bank
  crypto: Crypto
}

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
