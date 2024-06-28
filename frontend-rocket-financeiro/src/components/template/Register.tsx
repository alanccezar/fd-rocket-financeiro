import { IconChevronRight, IconCircleFilled, IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import Link from "next/link";
import registers from "../../data/registers.json";

console.log(registers);

export default function Register() {
  return (
    <div id="table" className="flex flex-col w-[65%]">
      {registers.map((reg) => {
        return (
          <Link key={reg.id} href={{ pathname: "/registerDetails", query: { id: reg.id, date: reg.date, type: reg.type, description: reg.description, value: reg.value, status: reg.status } }} className="w-full flex justify-between bg-slate-800 rounded py-4 px-2 mb-4">
            <div id="left-infos" className="flex w-2/5 justify-between">
              <span id="id" className="text-white font-bold">{reg.id}</span>
              <span id="data" className="text-slate-400">{reg.date}</span>
              <span id="descricao" className="text-white font-bold">{reg.type}</span>
            </div>
            <div id="right-infos" className="flex w-2/5 justify-between">
              <span id="valor" className="text-white font-bold flex justify-between w-2/5">
                {
                  reg.type === "Receita"
                    ?
                    <span id="tipo" className="text-green-500"><IconTrendingUp stroke={2} /></span>
                    :
                    <span id="tipo" className="text-red-500"><IconTrendingDown stroke={2} /></span>
                }
                {reg.value}
              </span>
              <span id="status" className="text-green-500 flex w-2/5 items-center justify-evenly"><IconCircleFilled size={16} />  {reg.status}</span>
              <span className="text-white"><IconChevronRight stroke={1} /></span>
            </div>
          </Link>
        )
      })}


      {/* <Link href={{ pathname: "/registerDetails", query: { id: "#ACJCKLF", date: "22 Jun 2024", type: "Despesa", description: "Luz", value: "R$ 105,22", status: "Consolidado" } }} className="w-full flex justify-between bg-slate-800 rounded py-4 px-2 mb-4">
        <div id="left-infos" className="flex w-2/5 justify-between">
          <span id="id" className="text-white font-bold">#ACJCKLF</span>
          <span id="data" className="text-slate-400">22 Jun 2024</span>
          <span id="descricao" className="text-white font-bold">Luz</span>
        </div>
        <div id="right-infos" className="flex w-2/5 justify-between">
          <span id="valor" className="text-white font-bold flex justify-between w-2/5">
            <span id="tipo" className="text-red-500"><IconTrendingDown stroke={2} /></span>
            R$ 105,22
          </span>
          <span id="status" className="text-green-500 flex w-2/5 items-center justify-evenly"><IconCircleFilled size={16} />  Consolidado</span>
          <span className="text-white"><IconChevronRight stroke={1} /></span>
        </div>
      </Link> */}
    </div>
  )
}