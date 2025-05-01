export const api = {
  get: async (url: string, init?: RequestInit) => {
    return fetch(url, {
      ...init,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(init?.headers || {}),
      },
    })
  },

  post: async (url: string, body?: unknown, init?: RequestInit) => {
    return fetch(url, {
      ...init,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(init?.headers || {}),
      },
      body: JSON.stringify(body),
    })
  },

  put: async (url: string, body?: unknown, init?: RequestInit) => {
    return fetch(url, {
      ...init,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...(init?.headers || {}),
      },
      body: JSON.stringify(body),
    })
  },

  delete: async (url: string, init?: RequestInit) => {
    return fetch(url, {
      ...init,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...(init?.headers || {}),
      },
    })
  },

  patch: async (url: string, body?: unknown, init?: RequestInit) => {
    return fetch(url, {
      ...init,
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        ...(init?.headers || {}),
      },
      body: JSON.stringify(body),
    })
  },
}
