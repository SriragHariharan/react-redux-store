import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarB from '../components/NavbarB'

function RootLayout() {
  return (
    <div>
        <NavbarB/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout