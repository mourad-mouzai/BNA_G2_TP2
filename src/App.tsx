import React from 'react'
import Header from './pages/Header'
import Content from './pages/Content'
import Footer from './pages/Footer'
import SideBare from './pages/Footer'
import { Box } from '@mui/material'

const App = () => {
  return (
    <Box className="flex flex-row">
      <SideBare/>
    <Box className="flex flex-col">
      <Header/>
      <Content/>
      <Footer/>
    </Box>
    </Box>
  )
}

export default App
