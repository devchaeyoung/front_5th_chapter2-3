import { User, UserDetail } from '@/types/user'
import { Post } from '@/types/post'

export type CommentUser = Pick<UserDetail, 'id' | 'username'> & {
  fullname: string
}

export interface Comment {
  id: number
  body: string
  postId: Post['id']
  userId: User['id']
  createdAt: string
  likes: number
  user: CommentUser
}

export type NewCommentInput = Pick<Comment, 'body' | 'userId'> & {
  postId: Post['id'] | null
}

export interface AddComment {
  id: Comment['id']
  postId: Post['id']
  body: string
  user: CommentUser
}
