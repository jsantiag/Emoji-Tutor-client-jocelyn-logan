import * as actions from '../actions/questions';

const initialState = {
  question: {
    _id: null,
    emoji: null,
    weight: null,
    next: null,
  },
  error: null,
  loading: false,
  score: 0,
  correct: 0,
  incorrect: 0,
  showProgress: false
}

export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_QUESTION_REQUEST:
      return { ...state, loading: true };
    case actions.FETCH_QUESTION_SUCCESS:
      return { ...state, question: action.question, error: null, loading: false };
    case actions.FETCH_QUESTION_ERROR:
      return { ...state, loading: false, error: action.error };
    case actions.POST_ANSWER_REQUEST:
      return { ...state, loading: true };
    case actions.POST_ANSWER_SUCCESS:
      return { ...state, error: null, loading: false };
    case actions.POST_ANSWER_ERROR:
      return { ...state, loading: false, error: action.error };
    case actions.FETCH_PROGRESS_REQUEST:
      return { ...state, loading: true };
    case actions.FETCH_PROGRESS_SUCCESS:
      return { ...state, score: action.progress.score, correct: action.progress.correct, incorrect: action.progress.incorrect, error: null, loading: false };
    case actions.FETCH_PROGRESS_ERROR:
      return { ...state, loading: false, error: action.error };
    case actions.POST_PROGRESS_REQUEST:
      return { ...state, loading: true };
    case actions.POST_PROGRESS_SUCCESS:
      return { ...state, score: action.progress.score, correct: action.progress.correct, incorrect: action.progress.incorrect, error: null, loading: false };
    case actions.POST_PROGRESS_ERROR:
      return { ...state, loading: false, error: action.error };
    case actions.RESET_STATE:
      return { ...initialState };
    case actions.SHOW_PROGRESS:
      const show = state.showProgress;
      return { ...state, showProgress: !show };
    default:
      return state;
  }
}