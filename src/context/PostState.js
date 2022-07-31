import React, { useReducer } from "react";
import axios from "axios";

import PostContext from "./PostContext";
import PostReducer from "./PostReducer";


const PostState = (props) => {

    let initialState = {
        post: [],
    };

    const [state, dispatch] = useReducer(PostReducer, initialState);

    return (
        <PostContext.Provider
          value={{
            post: state.post,
            dispatch
          }}
        >
          {props.children}
        </PostContext.Provider>
      );
}

export default PostState;