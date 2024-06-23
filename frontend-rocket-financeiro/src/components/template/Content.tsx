import Header from "./Header";
import RegistersTable from "./RegistersTable";

interface Content {
  titulo: string;
  notifications?: string;
}

export default function Content(props: Content) {
  return (
    <section className="w-11/12 h-screen">
      <Header titulo={props.titulo} notifications={props.notifications} />
      <RegistersTable />
    </section>
  )
}