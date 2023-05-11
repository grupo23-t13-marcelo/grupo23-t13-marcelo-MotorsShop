import { extendTheme } from "@chakra-ui/react";

const MotorTheme = extendTheme({

  styles: {
    global: {
      "#root": {
        display: 'flex',
        flexDirection: 'column',
        minHeight: "100vh",
      },
    },
  },


  config: {
    initialColorMode: "light",
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif"
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
    whiteFixed: "#FFFFFF",
    
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

    random: {
      1: "#E34D8C",
      2: "#C04277",
      3: "#7D2A4D",
      4: "#7000FF",
      5: "#6200E3",
      6: "#36007D",
      7: "#349974",
      8: "#2A7D5F",
      9: "#153D2E",
      10: "#6100FF",
      11: "#5700E3",
      12: "#30007D",

    }

  },
  fontSizes: {
    "6xl": "48px",
    "5xl": "36px",
    "4xl": "30px",
    xl: "20px",
    lg: "18px",
    md: "16px",

  },
  fontWeights: {
    light: 300,
    normal: 500,
    bold: 600,
    bolder: 700,
  },

  components: {
    Button: {
      variants: {
        "outline-1": {
          bg: "whiteFixed",
          color: "gray.900",
          border: "2px",
          borderColor: "gray.200",
          _hover: {
            bg: "gray.800",
            color: "white",
          },
        },
        "outline-2": {
          bgcolor: "whiteFixed",
          color: "gray.900",
          border: "2px",
          borderColor: "gray.200",
          _hover: {
            bg: "gray.50",
            color: "gray.800",
            border: "2px",
          borderColor: "gray.800",
          },
        },
        "gray-1": {
          bg: "gray.300",
          color: "gray.700",


          _hover: {
            bg: "gray.400",
            color: "gray.700",
          },
        },
        "button-sender": {
          color:"whiteFixed",
          bg: "brand1",
          _hover: {
            bg: "brand2",
          }
        },
      },
    },
    Input: {
      variants:{
        "teste-1": {
          
        }
      }
    }
  },
})


export default MotorTheme;
