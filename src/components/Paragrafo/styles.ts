import styled from 'styled-components'
import {props} from '.'

export const P = styled.p <props>`
font-size:14px;
color: ${(props: { tipo: string })=>(props.tipo === "principal" ? "#282A35":'#949494')};
line-height:22px;
`
