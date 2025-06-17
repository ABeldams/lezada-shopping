import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/api/api'
export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token') || '')
  const error = ref(null)
  const loading = ref(false)
  const products = ref([])
  const product = ref(null) 
  const currentPage = ref(1)
  const totalPages = ref(1)

  const login = async () => {
    console.log('Login function called') 
    
    try {
      const response = await api.post('/login', {
        email: 'test@example.com',
        password: 'password123'
      })
  
      token.value = response.data?.data?.token
  
      if (!token.value) {
        console.error('No token received!')
        return
      }
  
      localStorage.setItem('token', token.value)
    } catch (err) {
      error.value = err.response?.data || err.message
      console.error('Login failed:', error.value)
    }
  }

  const fetchProducts = async (page = 1) => {
    if (!token.value) {
      console.error("No token found. Please log in first.")
      return
    }

    try {
      loading.value = true
      const response = await api.get('/products', {
        headers: { Authorization: `Bearer ${token.value}` },
        params: { page }
      })

      if (!Array.isArray(response.data?.data?.data)) {
        throw new Error('Unexpected API response format')
      }

      products.value = response.data.data.data.map(p => ({
        id: p.id,
        name: p.name,
        price: p.price,
        description: p.description,
        image: p.image,
        hover_image: p.hover_image,
        quantity: 1,
      }))

      currentPage.value = response.data.data.current_page || page
      totalPages.value = response.data.data.last_page || 1
    } catch (err) {
      error.value = err.response?.data || err.message
    } finally {
      loading.value = false
    }
  }
    
  const fetchSingleProduct = async (productId) => {
    try {
      loading.value = true
      error.value = null
      
      const response = await api.get(`/products/${productId}`, {
        headers: { Authorization: `Bearer ${token.value}` }
      })
      
      const productData = response.data.data
      if (!productData?.id) {
        throw new Error('Invalid product data')
      }
      
      product.value = {
        id: productData.id,
        name: productData.name,
        description: productData.description,
        price: productData.price,
        stock: productData.stock,
        image: productData.image,
        hover_image: productData.hover_image,
        category: productData.category,
        quantity: 1
      }
      
      return product.value
    } catch (err) {
      error.value = err.response?.data?.message || err.message
      product.value = null
      return null
    } finally {
      loading.value = false
    }
  }

  const getProductsByCategory = async (category, page = 1) => {
    try {
      loading.value = true
      const response = await api.get(`/products`, {
        headers: { Authorization: `Bearer ${token.value}` },
        params: { category, page }
      })

      const { data } = response.data
      products.value = data.data
      currentPage.value = data.current_page
      totalPages.value = data.last_page
    } catch (err) {
      error.value = err.response?.data || err.message
    } finally {
      loading.value = false
    }
  }
  
  return { 
 
    token, 
    error, 
    loading,
    login,
    products,
    product, 
    currentPage,
    totalPages,
    fetchProducts,
    fetchSingleProduct,
    getProductsByCategory
  }
})