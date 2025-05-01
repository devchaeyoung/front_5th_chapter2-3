import { Post, NewPost, PostsSearchParams } from '@/types/post'
import { PaginatedResponse } from '../../types/common'
import { api } from './instance'

export type PostsPaginationParams = Pick<PostsSearchParams, 'limit' | 'skip'>
export interface PostsResponse extends PaginatedResponse {
  posts: Post[]
}
export const postsApi = {
  fetchPosts: async (params: PostsSearchParams): Promise<PostsResponse> => {
    const searchParams = new URLSearchParams()
    if (params.limit) searchParams.set('limit', params.limit.toString())
    if (params.skip) searchParams.set('skip', params.skip.toString())
    if (params.sortBy) searchParams.set('sortBy', params.sortBy)
    if (params.sortOrder) searchParams.set('sortOrder', params.sortOrder)

    const response = (await fetch(`/api/posts?${searchParams.toString()}`)).json()
    return response
  },

  searchPosts: async (query: string): Promise<PostsResponse> => {
    const response = await fetch(`/api/posts/search?q=${encodeURIComponent(query)}`)
    return response.json()
  },

  fetchPostsByTag: async (tag: string): Promise<PostsResponse> => {
    const response = await fetch(`/api/posts/tag/${encodeURIComponent(tag)}`)
    return response.json()
  },

  addPost: async (post: NewPost): Promise<Post> => {
    const response = await fetch('/api/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    })
    return response.json()
  },

  updatePost: async (post: Post): Promise<Post> => {
    const response = await fetch(`/api/posts/${post.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    })
    return response.json()
  },

  deletePost: async (id: number): Promise<void> => {
    await fetch(`/api/posts/${id}`, { method: 'DELETE' })
  },

  fetchTags: async (): Promise<string[]> => {
    const response = await fetch('/api/posts/tags')
    return response.json()
  },
}

export const fetchPosts = async ({ limit, skip }: PostsPaginationParams): Promise<PostsResponse> => {
  try {
    const url = `/api/posts?limit=${limit}&skip=${skip}`
    const res = await api.get(url)
    const data = await res.json()
    return data
  } catch (error: unknown) {
    console.error('Error fetching posts:', error)
    throw error
  }
}
