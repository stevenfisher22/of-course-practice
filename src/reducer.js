// Imports
import { ADD_COURSE } from './actions';
import produce from 'immer';

// Initial State
const initialState = {
    courses: []
};

// Regular Reducer
function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_COURSE:
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