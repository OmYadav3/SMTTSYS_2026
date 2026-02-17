import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/shared/Sidebar'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'


const Layout = () => {
  return (
    <div className="flex min-h-screen">

      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* RIGHT SIDE */}
      <div className="flex flex-col flex-1">

        {/* Top Navbar */}
        <Navbar children={'320102-Rashoolpur Sikrod Plaza DME KM 3134'} />

        {/* Page Content */}
        <main className=" h-full ">
          <Outlet />
        </main>

        {/* Footer */}
        {/* <Footer /> */}

      </div>

    </div>

  )
}

export default Layout