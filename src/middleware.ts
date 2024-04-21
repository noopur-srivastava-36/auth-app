
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface AuthProps {
  children: JSX.Element
}

const ProtectRoute = (props: AuthProps) => {
  const { children } = props
  const token = localStorage.getItem('token')
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/');
    }
    if (token) {
      navigate('/dashboard');
    }

  }, [token])
  if (!token) {

    return null
  }
  return children

};

export default ProtectRoute
