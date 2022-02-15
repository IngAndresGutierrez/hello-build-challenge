/* import internal modules */
import {
  HANDLE_LIST_REPOSITORIES,
  HANDLE_FAVORITES_REPOSITORIES,
} from '../../types/types'

export const setListRepositories = (repositories) => ({
  type: HANDLE_LIST_REPOSITORIES,
  payload: { repositories },
})

export const setFavoritesRepositories = (repositories) => ({
  type: HANDLE_FAVORITES_REPOSITORIES,
  payload: { repositories },
})
