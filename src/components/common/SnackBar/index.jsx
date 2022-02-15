// /* import external modules */
import { forwardRef } from 'react'
import { Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import { useDispatch, useSelector } from 'react-redux'

// /* import internal modules */
import { useStyles } from './styles'
import { setHandleAlert } from '../../../redux/actions/common/common'

/** @description This is a functional component for custom generic alert
 *  @version 1.0.0
 *  @since 12/02/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name SnackBar
 *  @returns {Component} Returns the snackbar component
 **/

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

const SnackBar = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const handleAlert = useSelector((state) => state.common.handleAlert)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    dispatch(
      setHandleAlert({
        message: '',
        status: false,
        severity: handleAlert.severity,
      })
    )
  }

  return (
    <div className={classes.root}>
      <Snackbar
        open={handleAlert.status}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={handleAlert.severity}>
          {handleAlert.message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default SnackBar
