import { Post } from '@/types/post'
import { User } from '@/types/user'

export const normalizePosts = ({
  postsData,
  usersData,
}: {
  postsData: { posts: Post[] }
  usersData: { users: User[] }
}): (Omit<Post, 'author'> & { author?: User })[] => {
  return postsData.posts.map((post) => ({
    ...post,
    author: usersData.users.find((user) => user.id === post.userId),
  }))
}
