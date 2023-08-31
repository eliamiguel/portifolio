import styled from 'styled-components'
import { Props } from '.'

export const Titulo = styled.h3<Props>`
  color: ${(props) => props.theme.corPrincpal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weinght: bold;
  margin-bottom: 16px;
`
