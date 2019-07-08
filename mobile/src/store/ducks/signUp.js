/**
 * ACTION TYPES
 */
export const Types = {
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'SIGNUP_FAILURE',
  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
};

/**
 * REDUCER
 */
const INITIAL_STATE = {
  loggedUser: null,
  token: null,
  loading: false,
  error: false,
};

export default function signUp(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case Types.SIGNUP_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case Types.SIGNUP_REQUEST:
      return { ...state, error: false, loading: true };
    default:
      return state;
  }
}

/**
 * ACTION CREATORS
 */
export const Creators = {
  signUpRequest: (fullname, email, password) => ({
    type: Types.SIGNUP_REQUEST,
    payload: { fullname, email, password },
  }),

  signUpSuccess: data => ({
    type: Types.SIGNUP_SUCCESS,
    payload: { data },
  }),

  signUpFailure: () => ({
    type: Types.SIGNUP_FAILURE,
  }),
};
