import Pagina from "@/components/template/Pagina";

export default function Home() {
  return (
    <Pagina titulo="Minhas Finanças" notifications={`Você possui ${2} registro(s)`}></Pagina>
  );
}
