// utils/api.ts
const getBaseUrl = () => {
    const isProduction = process.env.NODE_ENV === 'production';
  
    if (isProduction) {
      return 'https://ethereal-insights.vercel.app';
    } else {
      return 'http://localhost:3000';
    }
  };
  
  export const getApiUrl = () => {
    const baseUrl = getBaseUrl();
    return baseUrl;
  };
  