import { combineReducers } from "redux"

import auth from './Auth/auth.reducer'
import event from './Event/event.reducer'
import medicine from './Medicine/medicine.reducer'
import user from './User/user.reducer'
import medical from './Medical/medical.reducer'
import request from "./Request/request.reducer"

const rootReducer = combineReducers({
    auth,
    medicine,
    event,
    user,
    medical,
    request
})

export default rootReducer