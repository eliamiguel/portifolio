import { useState } from 'react'
import { ThemeProvider } from 'styled-components'


import Projetos from "./containers/Projetos"
import Sidebar from "./containers/Sidebar"
import Sobre from "./containers/Sobre"
import EstiloGlobal, { Container } from "./styles"
import temaLight from './thenes/light'
import temaDark from './thenes/Dark'

function App() {
const [estaUsandoTemaDark, setEstaUsandoTemaDark]= useState(false)
function trocaTema(){
  setEstaUsandoTemaDark(!estaUsandoTemaDark)
}

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>

    <EstiloGlobal/>
    <Sidebar trocaTema={trocaTema} />
    <Container>
    <main>
      <Sobre/>
      <Projetos />
    </main>
    </Container>

    </ThemeProvider>
  )
}

export default App
