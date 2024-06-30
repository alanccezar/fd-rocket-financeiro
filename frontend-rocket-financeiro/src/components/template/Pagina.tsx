import useToggle from "@/hooks/useToggle";
import Content from "./Content";
import Header from "./Header";
import MainMenu from "./MainMenu";
import ModalNewRegister from "./ModalNewRegister";

interface PaginaProps {
  titulo: string;
  descricao?: string;
  children?: any;
  className?: any;
  menu?: any;
  notifications?: string;
}

export default function Pagina(props: PaginaProps) {

  const [activate, toggleActive] = useToggle(false)

  return (
    <main
      className="w-screen h-screen flex"
    >
      <MainMenu />
      <Content titulo={props.titulo} notifications={props.notifications}>
        <Header titulo={props.titulo} notifications={props.notifications} activate={activate} toggleActive={toggleActive} />
        {props.children}
        {
          activate === true
            ?
            <ModalNewRegister activate={activate} toggleActive={toggleActive} />
            :
            ""
        }
      </Content>
    </main>
  )
}