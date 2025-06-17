import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/api/api'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token') || '')
  const user = ref(null)
  const error = ref(null)
  
  const login = async () => {
    console.log('Login function called')

    try {
      const response = await api.post('/login', {
        email: 'abdamaturu@.com',
        password: '123456'
      })

      token.value = response.data?.data?.token
      if (!token.value) return console.error('No token received:', response.data)

      localStorage.setItem('token', token.value)
      console.log('Token stored:', token.value)

      await getUserProfile()
    } catch (err) {
      error.value = err.response?.data || err.message
      console.error('Login failed:', error.value)
    }
  }

  const register = async (payload) => {
    try {
      const response = await api.post('/register', payload)
  
      const receivedToken = response.data?.data?.token
      if (!receivedToken) {
        throw new Error('No token received from registration response.')
      }
  
      token.value = receivedToken
      localStorage.setItem('token', receivedToken)
  
      await getUserProfile()
      console.log('Registration successful. User profile loaded.')
    } catch (err) {
      error.value = err.response?.data?.message || err.message || 'Registration failed'
      console.error('Registration error:', error.value)
    }
  }
  

  // Get user profile
  const getUserProfile = async () => {
    if (!token.value) return
    try {
      const response = await api.get('/user', {
        headers: { Authorization: `Bearer ${token.value}` }
      })
      user.value = response.data?.data
    } catch (err) {
      error.value = err.response?.data || err.message
      console.error('Fetching user profile failed:', error.value)
    }
  }

  // Logout
  const logout = async () => {
    try {
      await api.post('/logout', {}, {
        headers: { Authorization: `Bearer ${token.value}` }
      })
    } catch (err) {
      console.warn('Logout error:', err.response?.data || err.message)
    } finally {
      token.value = ''
      user.value = null
      localStorage.removeItem('token')
    }
  }

  
  

  return {
    token,
    user,
    error,
  
    login,
    register,
    logout,
    getUserProfile,
  
  }
})
