import Content from "@/components/template/Content";
import Pagina from "@/components/template/Pagina";
import RegistersTable from "@/components/template/RegistersTable";

export default function Home() {
  return (
    <Pagina titulo="Minhas Finanças" notifications={`Você possui ${2} registro(s)`}>
      <RegistersTable />
    </Pagina>
  );
}