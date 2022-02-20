import { getCommentManagePermission } from '../../auth/auth0Config'
import {
  LOAD_USER,
  VERIFY_ROLE
} from '../types/userTypes'

export const loadUser = (user: {data: {}}) => ({
  type: LOAD_USER,
  payload: user.data
})

export const verifyRole = (role: boolean ) => ({
  type: VERIFY_ROLE,
  payload: role
})

export const fetchRole = () => async (dispatch: any) => {
  const mod = await getCommentManagePermission()
  if (mod.status === 200){
    dispatch(verifyRole(true));
    return;
  }
}
