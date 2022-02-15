/* import internal modules */
import SignIn from '../components/SignIn'
import Copyright from '../components/common/Copyright'

/** @description This is a functional component for not found page
 *  @version 1.0.0
 *  @since 12/02/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name SignIn
 *  @returns {Component} Returns the not found component view
 **/

const SignInView = () => {
  return (
    <>
      <SignIn />
      <Copyright />
    </>
  )
}

export default SignInView
