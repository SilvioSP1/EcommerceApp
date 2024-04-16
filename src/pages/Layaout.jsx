import React from 'react'
import Header from '../components/Navbar'
import Footer from '../components/Footer'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

const Layaout = () => {
  return (
    <>
        <Header/>
        <Box>
            <Outlet />
        </Box>
        <Footer/>
    </>
  )
}

export default Layaout