import Content from "./Content";
import Header from "./Header";
import MainMenu from "./MainMenu";

interface PaginaProps {
  titulo: string;
  descricao?: string;
  children?: any;
  className?: any;
  menu?: any;
  notifications?: string;
}

export default function Pagina(props: PaginaProps) {
  return (
    <main
      className="w-screen h-screen flex"
    >
      <MainMenu />
      <Content titulo={props.titulo} notifications={props.notifications}>
        <Header titulo={props.titulo} notifications={props.notifications} />
        {props.children}
      </Content>
    </main>
  )
}