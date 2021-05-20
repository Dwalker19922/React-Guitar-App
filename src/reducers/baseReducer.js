import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS, NEW_SEARCH,SEARCH_VALUE } from "../actions/actions";

export const initialState = {
  search:"",
  value:"",
  data:[],
  isFetching:false,
  error:"",
  };
  
export const baseReducer = (state=initialState, action) => {
  switch (action.type) {
    case NEW_SEARCH:
      return{
        ...state,
        search:action.payload
      }
      case SEARCH_VALUE:
        return{
          ...state,
          value:action.payload
        }
        case FETCH_START:
          return{
            ...state,
            isFetching:true
          }
        case FETCH_SUCCESS:
          return{
            ...state,
            data:action.payload,
            isFetching:false
          }
          case FETCH_FAIL:
            return{
              ...state,
              error:action.payload,
              isFetching:false
            }
    default:
      return state;
  }
};
