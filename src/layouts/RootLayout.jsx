import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarB from '../components/NavbarB'
import Footer from '../components/Footer'
import { Provider } from 'react-redux'
import store from '../redux/store'

function RootLayout() {
  return (
    <div>
        <NavbarB/>
        <main>
          <Provider store ={store}>
            <Outlet/>
          </Provider>
        </main>
        <Footer/>
    </div>
  )
}

export default RootLayout