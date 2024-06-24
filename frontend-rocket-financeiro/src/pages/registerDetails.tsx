import Content from "@/components/template/Content";
import Pagina from "@/components/template/Pagina";
import RegisterPanel from "@/components/template/RegisterPanel";

export default function registerDetails() {
  return (
    <Pagina titulo="Descrição do registro">
      <RegisterPanel />
    </Pagina>
  )
}