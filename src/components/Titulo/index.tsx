import { Titulo as TituloEstilos } from "./styles";

export type Props ={
  shildren:string;
  fontSize?: number;
}

// eslint-disable-next-line react/react-in-jsx-scope
const Titulo = (props:Props)=> <TituloEstilos fontSize={props.fontSize}>{props.shildren}</TituloEstilos>

export default Titulo;
