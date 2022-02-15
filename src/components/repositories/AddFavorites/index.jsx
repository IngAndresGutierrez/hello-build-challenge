/* import external modules */
import { useDispatch, useSelector } from 'react-redux'
import { IconButton } from '@mui/material'
import { Favorite } from '@mui/icons-material'
import { setFavoritesRepositories } from '../../../redux/actions/repositories/repositories'

/* import internal modules */

/** @description This is a functional component for AddToFavoritesRepositories
 *  @version 1.0.0
 *  @since 12/02/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name AddToFavoritesRepositories
 *  @returns {Component} Returns the AddToFavoritesRepositories component
 **/

const AddToFavoritesRepositories = (repositoryInfo) => {
  const dispatch = useDispatch()

  const repositoriesFavorites = useSelector(
    (state) => state.repositories.favoritesRepositories
  )

  const addFavorite = () => {
    const newList = repositoriesFavorites.concat(repositoryInfo.row)
    const uniqueList = removeDuplicates(newList)
    dispatch(setFavoritesRepositories(uniqueList))
  }

  const removeDuplicates = (list) => {
    return [...new Set(list)];
  }

  return (
    <IconButton
      color='primary'
      aria-label='favorite'
      onClick={addFavorite}
      key={repositoryInfo.row.id}
    >
      <Favorite />
    </IconButton>
  )
}

export default AddToFavoritesRepositories
