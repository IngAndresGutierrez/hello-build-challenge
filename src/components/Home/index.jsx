/* eslint-disable react-hooks/exhaustive-deps */
/* import internal modules */

import { useEffect } from 'react'
import { Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

/* import internal modules */
import TabsMenu from '../TabsMenu'
import { getRepositories, getUser } from '../../apis/github'
import { setListRepositories } from '../../redux/actions/repositories/repositories'

/** @description This is a functional component for layout  *  @version 1.0.0
 *  @since 12/02/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name Home
 *  @returns {Component} Returns the layout of component
 **/

const Home = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.user)

  useEffect(() => {
    getUserFunction()
    getRepositoriesFunction()
  }, [])

  const getUserFunction = () => {
    getUser(currentUser.user)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const getRepositoriesFunction = () => {
    getRepositories(currentUser.user)
      .then((response) => {
        dispatch(setListRepositories(response.data))
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TabsMenu />
      </Grid>
    </Grid>
  )
}

export default Home
