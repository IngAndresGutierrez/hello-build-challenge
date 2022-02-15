/* import external modules */
import { combineReducers } from 'redux'

/* import internal modules */
import user from './user/user'
import common from './common/common'
import repositories from './repositories/repositories'

const rootReducer = combineReducers({
  user,
  common,
  repositories,
})

export default rootReducer
