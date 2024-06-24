import { IconCircleFilled } from "@tabler/icons-react";

export default function RegisterCard() {
  return (
    <div className="bg-slate-800 rounded py-4 mt-4 flex p-2">
      <div className="">
        <span></span>
      </div>
      <div className="flex flex-col w-1/6">
        <span>Status do Registro</span>
        <span className="flex justify-around text-green-500 items-center p-2 mt-2 bg-green-500/30 rounded"><IconCircleFilled stroke={2} size={16} /> Consolidada</span>
      </div>
    </div>
  )
}