import { P } from "./styles";

export type props ={
  shildren:string
  tipo?:'principal' | 'secundario'

}

// eslint-disable-next-line react/react-in-jsx-scope
const Paragrafo = ({shildren, tipo ="principal"}: props)=> <P tipo={tipo}>{shildren}</P>

export default Paragrafo;
