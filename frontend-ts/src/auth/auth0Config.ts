import axios from 'axios';

export const getCommentManagePermission = async () => {
  const token = sessionStorage.getItem('token');
  const response = await axios.get<string>(`${process.env.REACT_APP_BACKEND_URL}/api/role`, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  });
  return response
}


export const getCreateAuthorization = async () => {
  const token = sessionStorage.getItem('token');
  const response = await axios.get<string>(`${process.env.REACT_APP_BACKEND_URL}/api/role/create`, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  });
  return response
}
