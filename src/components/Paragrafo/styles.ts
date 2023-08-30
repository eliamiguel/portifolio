import styled from 'styled-components'
import {props} from '.'

export const P = styled.p <props>`
font-size:${(props) => (props.fontSize ? props.fontSize + "px" : "14px")};
color: ${(props: { tipo: string })=>
(props.tipo === "principal" ? props.theme.corPrincpal
: props.theme.corSecundaria)};
line-height:22px;
`
