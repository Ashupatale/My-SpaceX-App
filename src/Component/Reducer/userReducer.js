export default function userReducer(state = {}, action) {
    switch (action.type) {
        case "ADD_USER":
            return { ...state, ...action.payload }

        case "LOGOUT": {
            // localStorage.clear()
            return {}
        }
        default:
            return state;
    }
} 