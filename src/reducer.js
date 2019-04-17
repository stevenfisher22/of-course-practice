// Imports
import { ADD_COURSE_BEGIN, ADD_COURSE_SUCCESS, ADD_COURSE_ERROR } from './actions';
import produce from 'immer';

// Initial State
const initialState = {
    courses: []
};

// Regular Reducer
function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_COURSE_SUCCESS:
            return {
                ...state,
                courses: [action.payload]
            };
        default: 
            return state;
    }
}

// Immer Reducer
// const reducer = produce((draft, action) => {
//     switch(action.type) {
//         case ADD_COURSE:
//             draft.courses.push(action.payload);
//             return;
//         default:
//             return;
//     }
// }, initialState)

export default reducer;