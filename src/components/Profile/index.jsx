/* import external modules */
import { Typography } from '@mui/material'

/** @description This is a functional component for profile
 *  @version 1.0.0
 *  @since 12/02/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name Profile
 *  @returns {Component} Returns the Profile component
 **/

const ProfileComponent = () => {
  return (
    <Typography
      align='center'
      variant='body2'
      color='textSecondary'
      style={{ marginBottom: 40, marginTop: 30 }}
    >
      Profile
    </Typography>
  )
}

export default ProfileComponent
