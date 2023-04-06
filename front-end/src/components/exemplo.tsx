import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
  Flex,
  Text,
  Grid,
  GridItem,
  SimpleGrid
} from '@chakra-ui/react'

//o chakra possui estilizações próprias, abaixo eu irei explicar algumas

//exemplos simples de algumas ferramentas do chakra
//completamente copiado das docs e feito algumas alterações para se adequar ao que precisava

export const DrawerExample1 = () => {
  //o useDisclosure abaixo verifica o estado do elemento, é como se fosse um useState feito pelo chakra
  //não é um useState, não funciona da mesma forma, mas seu resultado é parecido 
  //ele verifica se o elemento esta "aberto"/"fechado" e o "fecha" ou "abre"
  //é possivel definir diferentes estilizações para diferentes estados do componente
  //nesse componente não é possivel pois quando ele está fechado ele está invisível, então tanto faz
  //mas é possivel mudar a cor do botão que abre o menu dependendo do estado do menu
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef(null)

  //o disclosure é utilizado em qualquer elemento que apresente movimento
  //modais, menus, acordeons

  return (
    <>

      {
        //esse é um exemplo de uso do disclosure para mudar a cor do botão
        //como podem ver é bem simples e funciona como um true/false
        //o chakra já possui muitas cores embutidas nele ele aceita strings e hex codes
        //a propriedade open é necessária para todos os elementos que possuem movimento
        isOpen ? (
          <Button ref={btnRef}  onClick={onClose} backgroundColor={"blue.900"}>
            Open
          </Button>
        ) : (

          <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
            Open
          </Button>
        )
      }
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input  placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )

}


//em todos os elementos é possível alterar o tamanho utilizando height/width/h/w (sim, todos as opções funcionam)
//todos os elementos também possuem todas as propriedades que conhecemos do css
//padding, border, margin, borderRadius, borderWidth, backgroundColor
//a lista continua e eu ainda não encontrei uma propriedade do css que não exista nos elementos do chakra
//na documentação você pode achar mais informações sobre
//o chakra possui inclusive propriedades próprias de seus elementos que não existem no css
//o size do elemento abaixo é um exemplo disso
//para propriedades que são definidas por números, por exemplo padding, margin, height
//o chakra aceita somente numeros reais (de 0 até ?)
//ou seja 10vw, 10px, não são medidas válidas para o chakra
//mas < 10.5 > , < 0.5 > , < 15.25 > o chakra aceita
//sim, as casas decimais realmente alteram o tamanho
export const DrawerExample2 = () => {
  const [size, setSize] = React.useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = (newSize: string) => {
    setSize(newSize)
    onOpen()
  }

  //nesse caso o tamanho do menu lateral está sendo alterado baseado nos tamanhos abaixo
  //é feito um map nesse array e criado os botões com as keys necesárias
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

  //array de cores adicionado por mim para demonstrar mais uma vez a funcionade do disclosure
  const colors = ['red', 'blue', 'yellow', 'green', 'orange', 'pink']

  return (
    <>
      {sizes.map((size, index) => (
        //aqui cada botão está sendo criado e cada um deles possui uma cor diferente quando
        //isOpen == true
        //como vocês podem ver, ao clicar em qualquer botão a cor de todos é alterada
        //isso acontece pois todos estão compartilhando o mesmo disclosure
        //para que esse comportamento não ocorra seria necessário criar outro componente
        //igual o exemplo 1, caso vocês não tenham reparado o exemplo 1 não interfere em nada no exemplo 2
        //isso acontece pois eles são componentes diferente e não compartilham o mesmo disclosure
        //até onde testei cada componente pode possuir somente um disclosure
        //não pesquisei nas docs para verificar mas faria sentido ser o caso
        isOpen ? (
          <Button
            onClick={() => handleClick(size)}
            key={size}
            m={4}
            backgroundColor={colors[index]}
          >{`Open ${size} Drawer`}</Button>
        ) : (
          <Button
            onClick={() => handleClick(size)}
            key={size}
            m={4}
          >{`Open ${size} Drawer`}</Button>

        )

      ))}

      {
        /*
  
          aqui fica o menu lateral(Drawer), a propriedade size é a responsável pelo controle do tamanho
          para esse componente em específico o tamanho é pre definido e setado pelas strings do array
          eu não testei se a propriedade size funciona para outros elementos
          acredito que faria sentido funcionar para o modal e alguns outros
  
        */
      }
      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`${size} drawer contents`}</DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consequat nisl vel pretium lectus quam id. Semper quis lectus
              nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
              quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
              magna eget est lorem. Erat imperdiet sed euismod nisi porta.
              Lectus vestibulum mattis ullamcorper velit.
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

/*
  Agora faalndo sobre o flex que foi citado na daily por alguém
  o flex funciona como a tag flex, ela não é visivel, serve somente para
  adicionar a propriedade flex a algum elemento.

  Ou Seja, o flex vai ser utilizado somente pra englobar elementos

  Digamos que vc tenha duas Box do chakra, a Box é contruida como display: block
  ou seja, ela vai ter o comportamento de ocupar todo o comprimento da tela (caso o tamanho não seja definido)
  fazendo com que se utilizarmos somente as Box elas vão ficar uma em cima da outra
  mas ao englobarmos elas com o flex, elas vão virar flex e ficar uma ao lado da outra

*/

export const FlexBoxExample = () => {
  return (
    <>
      <Text marginTop={100}>FLEX BOX EXAMPLE LINHA: 186</Text>
      {
        /* 
          Vejam como as três primeiras Box ficaram uma em cima da outra, mesmo que o tamanho delas esteja limitado
          Experimentem apagar a propriedade w para ver o que acontece
        */
      }
      <Box backgroundColor={"green"} h={20} w={20} />
      <Box backgroundColor={"red"} h={20} w={20} />
      <Box h={20} w={20} />

      {
        /* 
          Mas ao englobarmos as box com a tag flex elas assumem a propriedade flex e ficam uma ao lado da outra 
          Isso funciona para literalmente TODOS os componentes do chakra
  
          Experimentem novamente apagar a propriedade w e depois adicionem novamente e apagem a h
          Depois experimentem apagar ambos h
          Vocês vão ver que existe um comprtamento interessante
          
        */
      }
      <Flex>
        <Box backgroundColor={"green"} h={20} w={20} />
        <Box backgroundColor={"red"} h={20} w={20} />
      </Flex>
    </>
  )
}

export const ComplexGridExample = () => {
  return (
    <>
      {
        /* 
          Não tenho muito o que dizer sobre o grid, é um grid, funciona como um grid
          ele é muito maleavel e da pra colocar os elementos da forma como vc quiser dentro dele
          o templateColumns define quantas colunas você quer
        */
      }
      <Text marginTop={100}>COMPLEX GRID EXAMPLE LINHA: 206</Text>
      <Grid templateColumns=' repeat(5, 1fr)' gap={6}>
        <GridItem backgroundColor={"green"} h={20} w={100} />
        <GridItem backgroundColor={"red"} h={20} w={100} />
        <GridItem backgroundColor={"green"} h={20} w={100} />
        <GridItem backgroundColor={"red"} h={20} w={100} />
        <GridItem backgroundColor={"green"} h={20} w={100} />
      </Grid >

      {
        /*
          Aqui tem o mesmo exemplo das docs, o que esta criando esse comportamento diferenciado é a 
          propriedade rowSpan e colSpan essas propriedades definem quantas colulas ou quantas linhas determinado elemento vai utilizar
        */
      }

      <Text marginTop={100}>COMPLEX GRID EXAMPLE LINHA: 221</Text>
      <Grid
        h='200px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
        marginBottom={100}
      >
        <GridItem rowSpan={2} colSpan={1} bg='tomato' />
        <GridItem colSpan={2} bg='papayawhip' />
        <GridItem colSpan={2} bg='papayawhip' />
        <GridItem colSpan={4} bg='tomato' />
      </Grid>
    </>
  )
}

export const SimpleGridExample = () => {
  return (
    <>
      {
        /* 
          Como o nome já diz é um grid simples, funciona quase igual o outro
          a diferença é que esse não da pra personalizar, só definir as colunas e o espaçamento

          Como vocês podem ver a propriedade columns está recendo um array
          mas ela não precisa receber um array, pode ser somente o número de colunas mesmo
          o que o array está fazendo é deixar o grid responsivo
          o array informa que o grid pode ter 2 ou 3 colulas dependendo do tamanho da tela

          o null não faz nada ali poderia ser somente [2,3]

          a documentação cita outras formas de tornar o grid responsivo, deem uma olhada
        */
      }
      <Text marginTop={100}>SIMPLE GRID EXAMPLE LINHA: 248</Text>
      <SimpleGrid columns={[2, null, 3]} spacing='40px'>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
      </SimpleGrid>
    </>
  )
}