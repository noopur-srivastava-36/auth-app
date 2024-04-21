
const baseURL = 'https://reqres.in'
export const loginUser = async (email: string, password: string) => {
    const response = await fetch(baseURL+'/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      throw new Error('Login failed');
    }
  
    return response.json();
  };

  export const registerUser = async (email: string, password: string) => {
    const response = await fetch(baseURL+'/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      throw new Error('Registration failed');
    }
  
    return response.json();
  };