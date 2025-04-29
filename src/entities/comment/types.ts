import { User } from '@/entities/user/types'

export interface Comment {
  id: number
  body: string
  postId: number
  authorId: User['id']
  createdAt: string
  likes?: number
}

export interface NewComment {
  body: string
  postId: number
  authorId: number
}
