import { User } from '../user/types'

export interface Post {
  id: number
  title: string
  content: string
  authorId: number
  createdAt: string
  tags?: string[]
  reactions?: {
    likes: number
    dislikes: number
  }
  author?: User
}

export interface NewPost {
  title: string
  content: string
  authorId: number
  tags?: string[]
}
