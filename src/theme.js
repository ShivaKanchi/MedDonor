
// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const Heading = {
  color:"#FFB87A", 
  fontFamily:'IBM Plex Sans',
  fontStyle:"normal",
  fontWeight:"700", 
  fontSize:"21px", 
  lineHeight:"28px",
  letterSpacing:"0.023em",
  pt:"20"
}

// 3. extend the theme
const theme = extendTheme({ config, Heading })

export default theme