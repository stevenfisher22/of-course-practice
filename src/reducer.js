// Imports
import { ADD_COURSE_BEGIN, ADD_COURSE_SUCCESS, ADD_COURSE_ERROR } from './actions';
import produce from 'immer';

// Initial State
const initialState = {
    loading: false,
    courses: [],
    error: null
};

// Regular Reducer
function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_COURSE_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case ADD_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                courses: [action.payload],
                error: null
            };
        case ADD_COURSE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default: 
            return state;
    }
}

// Immer Reducer
// const reducer = produce((draft, action) => {
//     switch(action.type) {
//         case ADD_COURSE_BEGIN:
//             draft.loading = true;
//             draft.error = null;
//             return;
//         case ADD_COURSE_SUCCESS:
//             draft.courses.push(action.payload);
//             return;
//         case ADD_COURSE_ERROR:
//             draft.loading = false;
//             draft.error = action.error;
//             return;
//         default:
//             return;
//     }
// }, initialState)

export default reducer;