/* import external modules */
import { LockOutlined } from '@mui/icons-material'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Container,
  Typography,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { setUser } from '../../redux/actions/user/user'
import { setHandleAlert } from '../../redux/actions/common/common'
import { useState } from 'react'

const theme = createTheme()

const SignUp = () => {
  let history = useNavigate()
  const dispatch = useDispatch()

  const [dataUser, setDataUser] = useState({
    user: '',
    password: '',
    firstName: '',
    lastName: ''
  })

  const handleSubmit = (event) => {
    const { user, password } = dataUser

    if (user && password) {
      dispatch(setUser(user))
      history('/home', { replace: true })
    } else {
      dispatch(
        setHandleAlert({
          message: 'All fields are required.',
          status: true,
          severity: 'warning',
        })
      )
    }
  }

  const handleChange = (event) => {
    setDataUser({
      ...dataUser,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlined />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                  value={dataUser.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  autoComplete='family-name'
                  value={dataUser.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='user'
                  label='GitHub User'
                  name='user'
                  autoComplete='email'
                  value={dataUser.user}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                  value={dataUser.password}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='/signin' variant='body2'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default SignUp
