/**
 * ACTION TYPES
 */
export const Types = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
};

/**
 * REDUCER
 */
const INITIAL_STATE = {
  email: null,
  loading: false,
  error: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        error: false,
        loading: false,
      };
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}

/**
 * ACTION CREATORS
 */
export const Creators = {
  loginRequest: (email, password) => ({
    type: Types.LOGIN_REQUEST,
    payload: { email, password },
  }),

  loginSuccess: email => ({
    type: Types.LOGIN_SUCCESS,
    payload: { email },
  }),

  loginFailure: error => ({
    type: Types.LOGIN_FAILURE,
    payload: { error },
  }),
};
