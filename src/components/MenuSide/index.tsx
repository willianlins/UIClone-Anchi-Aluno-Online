import { MenuTitle } from '../MenuTitle';
import { MenuItem } from '../MenuItem';


import { Container, ContentImg, ContentMenu, BorderTopAndBottom } from './styles';

import logo from '../../assets/Anchieta.png';
import { TiWarningOutline, TiDocument } from 'react-icons/ti';
import { RiBook2Fill, RiReplyAllFill, RiBankCardFill } from 'react-icons/ri';
import { VscArrowSwap } from 'react-icons/vsc';
import { BsCalendar3, BsPencilSquare, BsFillEmojiSmileFill, BsBookHalf, BsListCheck, BsFillCreditCard2FrontFill, BsFileEarmarkArrowUpFill, BsKey } from 'react-icons/bs';
import { HiOutlineLibrary, HiOutlineDocumentAdd } from 'react-icons/hi';
import { FaChartLine, FaTelegramPlane, FaGraduationCap, FaClipboardList, FaRegNewspaper, FaIdCard, FaUsers, FaCertificate } from 'react-icons/fa';
import { IoBarChart, IoNewspaperOutline, IoDocument } from 'react-icons/io5';
import { IoMdCash, IoMdBarcode } from 'react-icons/io';
import { MdOutlineWatchLater } from 'react-icons/md';
import { GiWorld } from 'react-icons/gi';
import { ImExit } from 'react-icons/im';



export function MenuSide() {

  return (
    <Container>
      <ContentImg>
        <img src={logo} alt="Anchieta Logo" />
      </ContentImg>
      <ContentMenu>

        <MenuTitle contentTitleMenu="Avisos" icon={TiWarningOutline}>
          <MenuItem itemTitle="Grupos - Aulas Presenciais" link="http://localhost:3000/" iconItem={VscArrowSwap} />
          <MenuItem itemTitle="Avisos/Mural" link="http://localhost:3000/" iconItem={TiWarningOutline} />
          <MenuItem itemTitle="Calendario" link="http://localhost:3000/" iconItem={BsCalendar3} />
        </MenuTitle>


        <MenuTitle contentTitleMenu="Biblioteca" icon={HiOutlineLibrary}>
          <MenuItem itemTitle="Biblioteca" link="http://localhost:3000/" iconItem={HiOutlineLibrary} />
          <MenuItem itemTitle="Biblioteca Virtual" link="http://localhost:3000/" iconItem={HiOutlineLibrary} />
        </MenuTitle>


        <MenuTitle contentTitleMenu="AVA" icon={RiBook2Fill}>
          <MenuItem itemTitle="AVA" link="http://localhost:3000/" iconItem={RiBook2Fill} />
        </MenuTitle>

        <MenuTitle contentTitleMenu="Avaliação" icon={FaChartLine}>
          <MenuItem itemTitle="Boletim" link="http://localhost:3000/" iconItem={BsPencilSquare} />
          <MenuItem itemTitle="Frequêcia" link="http://localhost:3000/" iconItem={FaChartLine} />
          <MenuItem itemTitle="índice de Rendimento" link="http://localhost:3000/" iconItem={IoBarChart} />
          <MenuItem itemTitle="Trabalhos" link="http://localhost:3000/" iconItem={FaTelegramPlane} />
          <MenuItem itemTitle="Avaliação Institucional" link="http://localhost:3000/" iconItem={BsFillEmojiSmileFill} />
        </MenuTitle>


        <MenuTitle contentTitleMenu="Disciplina" icon={BsBookHalf}>
          <MenuItem itemTitle="Horário de Aulas" link="http://localhost:3000/" iconItem={MdOutlineWatchLater} />
          <MenuItem itemTitle="Atividade Complementar" link="http://localhost:3000/" iconItem={RiBook2Fill} />
          <MenuItem itemTitle="Estágio" link="http://localhost:3000/" iconItem={FaGraduationCap} />
          <MenuItem itemTitle="Disciplinas Matriculadas" link="http://localhost:3000/" iconItem={BsBookHalf} />
          <MenuItem itemTitle="Histórico" link="http://localhost:3000/" iconItem={FaClipboardList} />
          <MenuItem itemTitle="Tarefas" link="http://localhost:3000/" iconItem={BsListCheck} />
          <MenuItem itemTitle="Publicações" link="http://localhost:3000/" iconItem={FaRegNewspaper} />
          <MenuItem itemTitle="Diário de Classe" link="http://localhost:3000/" iconItem={RiBook2Fill} />
        </MenuTitle>


        <MenuTitle contentTitleMenu="Cadastro" icon={FaIdCard}>
          <MenuItem itemTitle="Dados Cadastrais" link="http://localhost:3000/" iconItem={FaIdCard} />
          <MenuItem itemTitle="Documentos" link="http://localhost:3000/" iconItem={TiDocument} />
          <MenuItem itemTitle="Processo Seletivo" link="http://localhost:3000/" iconItem={FaUsers} />
        </MenuTitle>



        <MenuTitle contentTitleMenu="Secretaria Virtual" icon={IoNewspaperOutline}>
          <MenuItem itemTitle="Contratos" link="http://localhost:3000/" iconItem={IoDocument} />
          <MenuItem itemTitle="Solicitação de analise de cancelamento" link="http://localhost:3000/" iconItem={HiOutlineDocumentAdd} />
          <MenuItem itemTitle="Certificados" link="http://localhost:3000/" iconItem={FaCertificate} />
          <MenuItem itemTitle="Serviços" link="http://localhost:3000/" iconItem={IoNewspaperOutline} />
          <MenuItem itemTitle="Matricula" link="http://localhost:3000/" iconItem={RiBook2Fill} />
          <MenuItem itemTitle="DP/ADP" link="http://localhost:3000/" iconItem={RiReplyAllFill} />
        </MenuTitle>



        <MenuTitle contentTitleMenu="Financeiro" icon={IoMdCash}>
          <MenuItem itemTitle="Cobranças a Pagar" link="http://localhost:3000/" iconItem={IoMdCash} />
          <MenuItem itemTitle="Cobranças" link="http://localhost:3000/" iconItem={IoMdCash} />
          <MenuItem itemTitle="Boletos" link="http://localhost:3000/" iconItem={RiBankCardFill} />
          <MenuItem itemTitle="Ajuste de Boletos" link="http://localhost:3000/" iconItem={IoMdBarcode} />
          <MenuItem itemTitle="Cartão de Crédito" link="http://localhost:3000/" iconItem={BsFillCreditCard2FrontFill} />
          <MenuItem itemTitle="Extrato financeirto" link="http://localhost:3000/" iconItem={BsFileEarmarkArrowUpFill} />
        </MenuTitle>


        <MenuTitle contentTitleMenu="Carreiras" icon={RiBook2Fill}>
          <MenuItem itemTitle="Carreiras" link="http://localhost:3000/" iconItem={RiBook2Fill} />
        </MenuTitle>

        <BorderTopAndBottom>
          <MenuTitle contentTitleMenu="Mudar Senha" icon={BsKey} activeArrowDown={false}>
          </MenuTitle>

          <MenuTitle contentTitleMenu="Idioma" icon={GiWorld} activeArrowDown={false}>
          </MenuTitle>
        </BorderTopAndBottom>

        <MenuTitle contentTitleMenu="Sair" icon={ImExit} activeArrowDown={false}>
        </MenuTitle>

      </ContentMenu>
    </Container>
  );
}