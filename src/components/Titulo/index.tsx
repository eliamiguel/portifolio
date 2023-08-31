/* eslint-disable react/react-in-jsx-scope */
import { Titulo as TituloEstilos } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => (
  <TituloEstilos fontSize={props.fontSize}>{props.children}</TituloEstilos>
)

export default Titulo
