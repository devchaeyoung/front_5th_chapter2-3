import type { PaginatedResponse } from '../types/common'
import type { User, UserDetail } from '@/shared/types/user'

export interface PostsResponse extends PaginatedResponse {
  users: User[]
}

export const fetchUsers = async (): Promise<PostsResponse> => {
  try {
    const response = await fetch('/api/users?limit=0&select=username,image')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('fetchUsers error:', error)
    throw error
  }
}

export const fetchUserById = async (userId: number): Promise<UserDetail> => {
  try {
    const response = await fetch(`/api/users/${userId}`)
    return await response.json()
  } catch (error) {
    console.error('fetchUserById error:', error)
    throw error
  }
}
