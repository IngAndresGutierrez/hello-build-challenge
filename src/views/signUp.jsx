/* import internal modules */
import SignUp from '../components/SignUp'
import Copyright from '../components/common/Copyright'

/** @description This is a functional component for not found page
 *  @version 1.0.0
 *  @since 12/02/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name SignUpView
 *  @returns {Component} Returns the not found component view
 **/

const SignUpView = () => {
  return (
    <>
      <SignUp />
      <Copyright />
    </>
  )
}

export default SignUpView
