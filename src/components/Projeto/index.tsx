/* eslint-disable react/react-in-jsx-scope */
import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
