import { useMemo } from "react"
import { Box } from "@mui/material"
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { themeSettings } from "./theme"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "@/pages/navbar/"
import Dashboard from "@/pages/dashboard/"

function App() {
  const theme = useMemo(()=> createTheme(themeSettings), [])

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
              <Navbar />
              <Routes>
                <Route path='/' element={<Dashboard />} />
                {/*<Route path='/info' element={<div>info</div>} />*/}
              </Routes>

              
              
              
            </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
