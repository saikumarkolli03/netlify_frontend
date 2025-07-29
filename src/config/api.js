// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const apiConfig = {
  baseURL: API_BASE_URL,
  endpoints: {
    expenses: '/api/expenses',
    analytics: {
      monthly: '/api/metrics/monthly',
      category: '/api/metrics/category',
      trends: '/api/metrics/trends'
    },
    users: '/api/users',
    ocr: '/api/process-receipt'
  }
};

// Helper function to build full API URLs
export const buildApiUrl = (endpoint) => {
  return `${API_BASE_URL}${endpoint}`;
};

export default apiConfig;

