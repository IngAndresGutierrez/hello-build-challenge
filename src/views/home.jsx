/* import internal modules */
import Home from '../components/Home'
import MiniDrawer from '../components/common/Drawer'
import Copyright from '../components/common/Copyright'

/** @description This is a functional component main view
 *  @version 1.0.0
 *  @since 12/02/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name Home
 *  @returns {Component} Returns the main view
 **/

const HomeView = () => {
  return (
    <MiniDrawer>
      <Home />
      <Copyright />
    </MiniDrawer>
  )
}

export default HomeView
