import type { User } from "@/entities/user/types"

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch("/api/users?limit=0&select=username,image");
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error("fetchUsers 오류:", error);
    throw error;
  }
};

export const fetchUserById = async (userId: number): Promise<User> => {
  try {
    const response = await fetch(`/api/users/${userId}`);
    return await response.json();
  } catch (error) {
    console.error("fetchUserById 오류:", error);
    throw error;
  }
};