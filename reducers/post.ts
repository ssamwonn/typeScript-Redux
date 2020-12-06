import { ADD_POST, AddPostAction } from "../actions/post";

const initailState: string[] = [];

const postReducer = (
  prevState = initailState,
  action: AddPostAction
): string[] => {
  switch (action.type) {
    case ADD_POST:
      return [...prevState, action.data];
    default:
      return prevState;
  }
};

export default postReducer;
