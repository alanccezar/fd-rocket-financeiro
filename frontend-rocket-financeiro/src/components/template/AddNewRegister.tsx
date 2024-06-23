import { IconPlus } from "@tabler/icons-react";

export default function AddNewRegister() {
  return (
    <button className="w-[170px] flex bg-purple-500 rounded-full align-center items-center"
    >
      <div className="bg-white rounded-full relative h-[40px] w-[40px] flex items-center
          justify-center mr-[10px]">
        <IconPlus stroke={2} className="text-purple" />
      </div>
      <span className="text-white">Novo Registro</span>
    </button>
  )
}