/* eslint-disable react/react-in-jsx-scope */
import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Titulo";
import Avatar from "../../components/avatar";

import { BotaoTema, Descricao, SidebarContainer} from "./styles";

const Sidebar = ()=>(
<aside>
  <SidebarContainer>
  <Avatar/>
  <Titulo fontSize={20}>Elias Miguel</Titulo>
  <Paragrafo tipo="secundario" fontSize={16}>eliamiguel</Paragrafo>
  <Descricao tipo="principal" fontSize={12}>
    Engenheiro Front-end
  </Descricao>
  <BotaoTema>Trocar tema</BotaoTema>
  </SidebarContainer>
</aside>
)

export default Sidebar;
