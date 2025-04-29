import { Post, PostsResponse, SearchParams } from '@/entities/types'
import { fetchApi } from './base'

export const postsApi = {
  fetchPosts: async (params: SearchParams): Promise<PostsResponse> => {
    const searchParams = new URLSearchParams()
    if (params.limit) searchParams.set('limit', params.limit.toString())
    if (params.skip) searchParams.set('skip', params.skip.toString())
    if (params.sortBy) searchParams.set('sortBy', params.sortBy)
    if (params.sortOrder) searchParams.set('sortOrder', params.sortOrder)
    
    return fetchApi<PostsResponse>(`/posts?${searchParams.toString()}`)
  },

  searchPosts: async (query: string): Promise<PostsResponse> => {
    return fetchApi<PostsResponse>(`/posts/search?q=${encodeURIComponent(query)}`)
  },

  fetchPostsByTag: async (tag: string): Promise<PostsResponse> => {
    return fetchApi<PostsResponse>(`/posts/tag/${encodeURIComponent(tag)}`)
  },

  addPost: async (post: Omit<Post, 'id'>): Promise<Post> => {
    return fetchApi<Post>('/posts/add', {
      method: 'POST',
      body: JSON.stringify(post),
    })
  },

  updatePost: async (post: Post): Promise<Post> => {
    return fetchApi<Post>(`/posts/${post.id}`, {
      method: 'PUT',
      body: JSON.stringify(post),
    })
  },

  deletePost: async (id: number): Promise<void> => {
    await fetch(`/api/posts/${id}`, { method: "DELETE" })
  },

  fetchTags: async (): Promise<string[]> => {
    const response = await fetch("/api/posts/tags")
    return response.json()
  },
}