import { GET_POST,SET_POST,ADD_POST_LIKE,REMOVE_POST_LIKE } from "./types";

export default (state, action) => {
  const { payload, type } = action;
  console.log("STATE", state, payload)

  switch (type) {
    case SET_POST:
      return {
        ...state,
        post: payload,
      };

      case ADD_POST_LIKE:
        return {
          ...state,
          liked_by: state.post.liked_by.some(el=>el.id===payload.id)?state.post.liked_by: state.post.liked_by.push(payload)
        };

      case REMOVE_POST_LIKE:
        return {
          ...state,
          liked_by: state.post.liked_by.some(el=>el.id===payload.id)?state.post.liked_by.pop(): state.post.liked_by
        };
    
    default:
      return state;
  }
};