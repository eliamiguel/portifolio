/* eslint-disable react/react-in-jsx-scope */
import { type } from "os";
import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Titulo";
import Avatar from "../../components/avatar";

import { BotaoTema, Descricao, SidebarContainer} from "./styles";
type Props = {
  trocaTema:()= void
}

const Sidebar = (props:Props)=>(
<aside>
  <SidebarContainer>
  <Avatar/>
  <Titulo fontSize={20}>Elias Miguel</Titulo>
  <Paragrafo tipo="secundario" fontSize={16}>eliamiguel</Paragrafo>
  <Descricao tipo="principal" fontSize={12}>
    Engenheiro Front-end
  </Descricao>
  <BotaoTema onCliCk={props.trocaTema}>Trocar tema</BotaoTema>
  </SidebarContainer>
</aside>
)

export default Sidebar;
