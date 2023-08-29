import { P } from "./styles";

export type props ={
  shildren:string
  tipo?:'principal' | 'secundario'
  fontSize?:number

}

// eslint-disable-next-line react/react-in-jsx-scope
const Paragrafo = ({shildren, tipo ="principal", fontSize}: props)=> <P fontSize={fontSize}  tipo={tipo}>{shildren}</P>

export default Paragrafo;
