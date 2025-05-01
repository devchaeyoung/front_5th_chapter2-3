import { NewComment, Comment } from '@/shared/types/comment'

export const fetchComments = async (postId: number): Promise<Comment[]> => {
  try {
    const response = await fetch(`/api/comments/post/${postId}`)
    const data = await response.json()
    return data.comments
  } catch (error) {
    console.error('fetchComments error:', error)
    throw error
  }
}

export const addComment = async (newComment: NewComment): Promise<Comment> => {
  try {
    const response = await fetch('/api/comments/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComment),
    })
    return await response.json()
  } catch (error) {
    console.error('addComment error:', error)
    throw error
  }
}

export const updateComment = async (commentId: number, body: string): Promise<Comment> => {
  try {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ body }),
    })
    return await response.json()
  } catch (error) {
    console.error('updateComment error:', error)
    throw error
  }
}

export const deleteComment = async (commentId: number): Promise<void> => {
  try {
    await fetch(`/api/comments/${commentId}`, { method: 'DELETE' })
  } catch (error) {
    console.error('deleteComment error:', error)
    throw error
  }
}

export const likeComment = async (commentId: number, likes: number): Promise<Comment> => {
  try {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ likes }),
    })
    return await response.json()
  } catch (error) {
    console.error('likeComment error:', error)
    throw error
  }
}
