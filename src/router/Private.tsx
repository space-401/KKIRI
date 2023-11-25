import { Outlet, useNavigate } from 'react-router-dom';
import { PATH } from '@constants/path';
import tokenStorage from '@utils/tokenStorage';
import { useEffect } from 'react';

const PrivateRoute = () => {
  const navigate = useNavigate();
  const accessToken = tokenStorage.getAccessToken();

  useEffect(() => {
    if (!accessToken) {
      navigate(PATH.LOGIN);
    }
  }, [navigate, accessToken]);

  return <Outlet />;
};

export default PrivateRoute;
