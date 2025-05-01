import { User } from './user'

export interface Post {
  id: number
  title: string
  body: string
  tags: string[]
  views: number
  reactions: Reaction
  userId: User['id']
  author: User
}

export type NewPost = Pick<Post, 'title' | 'body' | 'userId'>

export type Reaction = {
  likes: number
  dislikes: number
}

export type Tag = {
  slug: string
  name: string
  url: string
}

export interface PostsSearchParams {
  limit: number
  skip: number
  sortBy: string
  sortOrder: string
  search: string
  tag: string
}
