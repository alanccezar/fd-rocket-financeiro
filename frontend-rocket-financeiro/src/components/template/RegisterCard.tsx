import { IconCircleFilled, IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

interface RegisterCardProps {
  id: any,
  date: any,
  type: any,
  description: any,
  value: any,
  status: any
}

export default function RegisterCard(props: RegisterCardProps) {
  return (
    <div className="bg-slate-800 rounded py-4 mt-4 flex p-2 flex-col">
      <div className="w-full flex justify-between">
        <div className="flex flex-col w-1/6 justify-between">
          <h1 className="font-bold">{props.id}</h1>
          <span className="font-bold text-slate-400 text-2xl">{props.description}</span>
        </div>
        <div className="flex flex-col w-1/6">
          <span className="text-slate-400 text-sm">Status do Registro</span>
          <span className="flex justify-around text-green-500 items-center p-2 mt-2 bg-green-500/30 rounded"><IconCircleFilled stroke={2} size={16} /> {props.status}</span>
          {/* {
            props.type === "Receita"
              ?
              (
                <span className="flex justify-around text-green-500 items-center p-2 mt-2 bg-green-500/30 rounded"><IconCircleFilled stroke={2} size={16} /> {props.status}</span>
              )
              :
              (
                <span className="flex justify-around text-red-500 items-center p-2 mt-2 bg-green-500/30 rounded"><IconCircleFilled stroke={2} size={16} /> {props.status}</span>
              )
          } */}
        </div>
      </div>

      <div className="w-full flex mt-10">
        <div className="flex flex-col w-1/3">
          <span className="text-slate-400 text-sm">Data do Registro</span>
          <span className="font-bold text-white">{props.date}</span>
        </div>
        <div className="flex flex-col w-1/3">
          <span className="text-slate-400 text-sm">Tipo Registro</span>
          <span className="font-bold"> {props.type === "Receita"
            ?
            (
              <div className="text-green-500 flex">
                <IconTrendingUp stroke={2} className="mr-0.5" /> RECEITA
              </div>
            )
            :
            (
              <div className="text-red-500 flex">
                <IconTrendingDown stroke={2} className="mr-0.5" /> DESPESA
              </div>
            )
          }</span>
        </div>
        <div className="flex flex-col w-1/3">
          <span className="text-slate-400 text-sm">Valor Registro</span>
          <span className="font-bold text-white">{props.value}</span>
        </div>
      </div>
    </div>
  )
}