
import { extendTheme } from '@chakra-ui/react'

const MotorTheme = extendTheme({
    config: {
        initialColorMode: "light",
        
    },
    fonts: {
        body: "Lexend, sans-serif",
        heading: "Lexend, serif"
      },
      colors: {
        // Brand
        brand1: "#4529E6",
        brand2: "#5126EA",
        brand3: "#B0A6F0",
        brand4: "#EDEAFD",
    
        // Grey scale
        gray: {
          50: "#F8F9FA",
          100: "#F1F3F5",
          200: "#E9ECEF",
          300: "#DEE2E6",
          400: "#CED4DA",
          500: "#ADB5BD",
          600: "#868E96",
          700: "#495057",
          800: "#212529",
          900: "#0B0D0D",
        },
    
        //Feedback
    
        red: {
          50: "#FFE5E5",
          100: "#FDD8D8",
          500: "#CD2B31",
        },
        green: {
          50: "#DDF3E4",
          100: "#CCEBD7",
          500: "#18794E",
        },
    
        // Random Profile
    
        purple: {
          50: "#FDFDFD",
          100: "#F8F9FA",
          200: "#E9ECEF",
          300: "#DEE2E6",
          700: "#495057",
          800: "#212529",
          900: "#0B0D0D",
        },
        pink: {
          50: "#FFE5E5",
          100: "#FDD8D8",
          500: "#E34D8C",
        },
      },
      fontSizes: {
        "6xl": "48px",
        "5xl": "36px",
        "4xl": "30px",
        "xl": "20px",
        "lg": "18px",
        "md": "16px",
      },
      fontWeights: {
        light: 300,
        normal: 500,
        bold: 600,
        bolder: 700,
      },
   
})

export default MotorTheme