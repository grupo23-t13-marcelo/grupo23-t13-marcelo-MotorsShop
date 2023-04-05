import React from 'react';
import { RoutesMain } from './routes/routes';
import { ChakraProvider } from '@chakra-ui/react'
import Global from './styles/global';
import theme from './styles/theme';


//chakra e styled components funcionando em conjunto
//visite components/exemplo.tsx para uma explicação do funcionamento do chakra

//as estilizações globais do styled components funcionam nos elementos do chakra
//mas não é possivel modificar cada aspecto do chakra utilizando o styled
//componentes do chakra não podem ir dentro de componentes do styled
//(quando digo dentro me refiro a quando criamos componentes do styled como o Global em styles/global.ts)
//(na realidade não tenho certeza se não pode, eu não tentei colocar)
//(mas por conta de como o styled funciona eu tenho quase certeza de que não vai dar certo)
//mas componentes criados com styled podem ir dentro de elementos do chakra
//(claro que depende do componente do chakra, não da pra colocar algo dentro de uma Drawer)
//(mas da pra colocar algo dentro de uma flex ou box)

function App() {
  return (
    <>
      {
        /* 
          o theme no chakra provider é para definirmos estilos globais para componentes específicos do chakra
          ele pode ser usado para implementar a função de dark mode que tem embutida no chakra,
          mas por conta das especificações do figma seria necessário alterar várias propriedades.
          eu (lucas) posso fazer caso seja do interesse de todos, mas mais pra frente
        */
      }
      <ChakraProvider theme={theme}>
        <Global />
        <RoutesMain />
      </ChakraProvider>
    </>
  );
}

export default App;
