/* import external modules */
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

/* import internal modules */
import Loading from '../common/Loading'
const LazyHome = lazy(() => import('../../views/home'))
const LazySignUp = lazy(() => import('../../views/signUp'))
const LazySignIn = lazy(() => import('../../views/signIn'))
const LazyPageNotFound = lazy(() => import('../../views/notFound'))

/** @description This is a functional component for main router app
 *  @version 1.0.0
 *  @since 12/02/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name Router
 *  @returns {Component} Returns the main router component
 **/

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<LazySignUp />} />
          <Route path="/signin" element={<LazySignIn />} />
          <Route path="/home" element={<LazyHome />} />
          <Route path="*" element={<LazyPageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default RouterComponent
