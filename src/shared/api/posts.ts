import type { Post, PostsSearchParams } from '@/types/post'
import { PaginatedResponse } from '../../types/common'
import { api } from './instance'

export type PostsPaginationParams = Pick<PostsSearchParams, 'limit' | 'skip'>
export interface PostsResponse extends PaginatedResponse {
  posts: Post[]
}

export const getPosts = async ({ limit, skip }: PostsPaginationParams): Promise<PostsResponse> => {
  const url = `/api/posts?limit=${limit}&skip=${skip}`
  const response = await api.get(url)
  const data = await response.json()
  return data
}

export const updatePost = async ({ selectedPost }: { selectedPost: Post }) => {
  const url = `/api/posts/${selectedPost.id}`
  const response = await api.put(url, JSON.stringify(selectedPost))
  const data = await response.json()
  return data
}

export const addPost = async ({ newPost }: { newPost: Omit<Post, 'id'> }) => {
  const url = '/api/posts/add'
  const response = await api.post(url, JSON.stringify(newPost))
  const data = await response.json()
  return data
}

export const deletePost = async ({ id }: { id: number }) => {
  const url = `/api/posts/${id}`
  const response = await api.delete(url)
  const data = await response.json()
  return data
}

export const searchPosts = async ({ searchQuery }: { searchQuery: string }) => {
  const url = `/api/posts/search?q=${searchQuery}`
  const response = await api.get(url)
  const data = await response.json()
  return data
}
