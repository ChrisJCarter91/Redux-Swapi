import /* we need our action types here*/ { 
  FETCH_CHAR_START,
  FETCH_CHAR_SUCCESS,
  FETCH_CHAR_FAIL
} from "../actions";

const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  isLoading: true,
  error: '',
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHAR_START:
      return {
        ...state,
        isLoading: true,
        error: ''
        };
    case FETCH_CHAR_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isLoading: false,
        error: '',
      };
    case FETCH_CHAR_FAIL:
      return {
        ...state,
        isLoading: false,
        error: '',
      };
    default:
      return state;
  }
};
