import { IconChevronLeft, IconEye } from "@tabler/icons-react";
import Link from "next/link";
import RegisterCard from "./RegisterCard";
import useToggle from "@/hooks/useToggle";

interface RegisterPanelProps {
  id: any,
  date: any,
  type: any,
  description: any,
  value: any,
  status: any,
  openEdition: boolean,
}

export default function RegisterPanel(props: RegisterPanelProps) {

  const [openEdition, setOpenEdition] = useToggle(false);

  return (
    <div className="text-white w-[65%] flex flex-col mx-auto">
      <Link href="/home" className="text-white w-24 flex"><IconChevronLeft stroke={2} /> Voltar</Link>

      <div className="bg-slate-800 rounded py-4 mt-4">
        <p className="flex px-2 items-center relative">Modo <span className="flex bg-slate-600 rounded ml-5 py-1 px-1"><IconEye stroke={2} className="mr-0.5" /> Visualização</span>
          <button className="px-4 py-1 rounded bg-slate-600 absolute right-2.5" onClick={setOpenEdition}>Editar</button>
        </p>
      </div>

      <RegisterCard id={props.id} date={props.date} type={props.type} description={props.description} value={props.value} status={props.status} openEdition={openEdition} />
    </div>
  )
}