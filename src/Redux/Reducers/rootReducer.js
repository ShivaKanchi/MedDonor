import { combineReducers } from "redux"

import auth from './Auth/auth.reducer'

const rootReducer = combineReducers({
    auth
})

export default rootReducers