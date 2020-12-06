import {
  LOG_IN_REQUEST,
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  LOG_OUT,
  LogInRequestAction,
  LogOutSuccessAction,
  LogInFailureAction,
  LogOutAction,
} from "../actions/user";

export interface UserState {
  isLogginIn: boolean;
  data: {
    nickname: string;
  } | null;
}

const initialState: UserState = {
  isLogginIn: false,
  data: null,
};

type UserReducerActions =
  | LogInFailureAction
  | LogInRequestAction
  | LogInRequestAction
  | LogOutAction
  | LogOutSuccessAction;

const userReducer = (prevState = initialState, action: UserReducerActions) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
    case LOG_IN_SUCCESS:
    case LOG_IN_FAILURE:
    case LOG_OUT:
      return {
        ...prevState,
        data: null,
      };
    default:
      return prevState;
  }
};

export default userReducer;
