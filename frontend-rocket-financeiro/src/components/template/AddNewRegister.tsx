import { IconPlus } from "@tabler/icons-react";

interface AddNewRegisterProps {
  activate: boolean,
  toggleActive: () => void
}

export default function AddNewRegister(props: AddNewRegisterProps) {

  return (
    <button className="w-[170px] flex bg-purple-500 rounded-full align-center items-center"
      onClick={props.toggleActive}>
      <div className="bg-white rounded-full relative h-[40px] w-[40px] flex items-center
          justify-center mr-[10px]">
        <IconPlus stroke={2} className="text-purple" />
      </div>
      <span className="text-white">Novo Registro</span>
    </button >
  )
}