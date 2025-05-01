// schemas/userSchema.ts
import { z } from 'zod'

// 공통 타입
export const coordinatesSchema = z.object({
  lat: z.number(),
  lng: z.number(),
})

export const addressSchema = z.object({
  address: z.string(),
  city: z.string(),
  state: z.string(),
  stateCode: z.string(),
  postalCode: z.string(),
  country: z.string(),
  coordinates: coordinatesSchema,
})

export const companySchema = z.object({
  name: z.string(),
  title: z.string(),
  department: z.string(),
  address: addressSchema,
})

export const bankSchema = z.object({
  cardNumber: z.string(),
  cardType: z.string(),
  cardExpire: z.string(),
  currency: z.string(),
  iban: z.string(),
})

export const hairSchema = z.object({
  color: z.string(),
  type: z.string(),
})

export const userDetailSchema = z.object({
  id: z.number(),
  username: z.string(),
  password: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  maidenName: z.string(),
  gender: z.string(),
  image: z.string().url(),
  birthDate: z.string(),
  bloodGroup: z.string(),
  eyeColor: z.string(),
  hair: hairSchema,
  height: z.number(),
  weight: z.number(),
  age: z.number(),
  ip: z.string(),
  macAddress: z.string(),
  phone: z.string(),
  ssn: z.string(),
  university: z.string(),
  userAgent: z.string(),
  role: z.string(),
  address: addressSchema,
  company: companySchema,
  bank: bankSchema,
  crypto: z.object({
    coin: z.string(),
    wallet: z.string(),
    network: z.string(),
  }),
})
