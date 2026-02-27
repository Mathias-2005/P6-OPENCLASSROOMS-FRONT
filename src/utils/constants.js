const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
console.log('API URL:', API_URL); // À ajouter pour déboguer

export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/auth/signup`,
  SIGN_IN: `${API_URL}/api/auth/login`,
  BOOKS: `${API_URL}/api/books`,
  BEST_RATED: `${API_URL}/api/books/bestrating`,
};