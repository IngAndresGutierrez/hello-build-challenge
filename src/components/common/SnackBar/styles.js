/* import external modules */
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: 2,
    },
  },
}))
