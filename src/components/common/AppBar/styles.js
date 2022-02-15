/* import external modules */
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  avatar: {
    marginRight: 2,
    marginLeft: 20,
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      marginLeft: 5,
    },
  },
  item: {
    marginRight: 3,
    textTransform: 'capitalize',
  },
  handleUserButton: {
    marginRight: 50,
    [theme.breakpoints.down('xl')]: {
      marginRight: 40,
    },
    [theme.breakpoints.down('md')]: {
      marginRight: 27,
    },
  },
  itemLogin: {
    backgroundColor: 'white',
    color: 'black',
    textTransform: 'capitalize',
    borderRadius: 13,
    width: 70,
    height: 30,
    marginTop: 9,
    marginRight: 30,
    marginLeft: 15,
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
      boxShadow: '0px 0px 5px 0.5px white',
    },
  },
}))

export default useStyles
