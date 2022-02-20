import { LOAD_USER, VERIFY_ROLE } from './../types/userTypes';
import { AnyAction } from 'redux'

interface IState {
  user: {},
  mod: boolean
}

const initialState: IState = {
  user: {},
  mod: false
}

const userReducer = (state = initialState, action: AnyAction) : IState=> {
  switch (action.type) {
    case LOAD_USER:
      return {
        user: action.payload,
        mod: state.mod
      }
    case VERIFY_ROLE:
      return {
        user: state.user,
        mod: action.payload
      }
    default:
      return state;
  }
}

export default userReducer
