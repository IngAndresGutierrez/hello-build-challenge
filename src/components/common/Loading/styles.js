/* import external modules */
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: 1,
    },
    justifyContent: 'center',
    zIndex: 9999,
    padding: 5,
  },
}))

export default useStyles
