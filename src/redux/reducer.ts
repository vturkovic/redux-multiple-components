import { State, Action } from '../interfaces';

const initialState: State = {
  name: '',
  surname: '',
  address: '',
  telephone: null
};

const reducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case 'UPDATE_NAME':
        return {
            ...state,
            name: action.payload.name,
            surname: action.payload.surname
        };
        case 'UPDATE_ADDRESS':
        return {
            ...state,
            address: action.payload
        };
        case 'UPDATE_TELEPHONE':
        return {
            ...state,
            telephone: action.payload
        };
        default:
        return state;
    }
};

export default reducer;