import { IconSquareLetterX } from "@tabler/icons-react";

interface ModalNewRegisterProps {
  activate: boolean,
  toggleActive: () => void,
}

export default function ModalNewRegister(props: ModalNewRegisterProps) {

  return (
    <div className="w-2/4 h-2/4 bg-slate-400 absolute top-1/4 left-1/4 flex">
      <button onClick={props.toggleActive}><IconSquareLetterX stroke={2} /></button>
      NOVO REGISTRO
    </div>
  )
}