import { useRouter } from "next/router";
import Pagina from "@/components/template/Pagina";
import RegisterPanel from "@/components/template/RegisterPanel";

export default function registerDetails() {

  const { query } = useRouter();
  const { id, date, type, description, value, status } = query;

  return (
    <Pagina titulo="Descrição do registro">
      <RegisterPanel id={id} date={date} type={type} description={description} value={value} status={status} />
    </Pagina>
  )
}