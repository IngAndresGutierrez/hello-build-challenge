/* import internal modules */
import {
  HANDLE_LIST_REPOSITORIES,
  HANDLE_FAVORITES_REPOSITORIES,
} from '../../types/types'

const initialState = {
  repositories: [],
  favoritesRepositories: [],
}

const RepositoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_LIST_REPOSITORIES:
      return Object.assign({}, state, {
        repositories: action.payload.repositories,
      })

    case HANDLE_FAVORITES_REPOSITORIES:
      return Object.assign({}, state, {
        favoritesRepositories: action.payload.repositories,
      })

    default:
      return state
  }
}

export default RepositoriesReducer
