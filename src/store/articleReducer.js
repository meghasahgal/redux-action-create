import articles from "../data/data.json";

const LOAD_ARTICLES = "article/loadArticles";

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles,
  };
};

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
    // ...state is a copy of the state
    // const newState = {...state};
    // newState.entries = [...state.entries]// everything that was in the old state will be in the array + add the actions
    // return newState;
      return { ...state, entries: [...state.entries, ...action.articles] };
    //   spread action.articles in the entries
    default:
      return state;
  }
};

export default articleReducer;
