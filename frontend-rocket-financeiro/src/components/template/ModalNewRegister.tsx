import { IconSquareLetterX } from "@tabler/icons-react";
import registers from "../../data/registers.json";

interface ModalNewRegisterProps {
  activate: boolean,
  toggleActive: () => void,
}

export default function ModalNewRegister(props: ModalNewRegisterProps) {

  function saveNewRegister(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    function generateIdCode() {
      const strBase = "ABCDEFGHIJKLMNOPQRSTUVXYWZ";
      const chars = strBase.split("");
      const scrambled = chars.sort(() => 0.5 - Math.random()).join("");
      return `#${scrambled.substring(0, 6)}`;
    }


    const formDataObj = {
      id: generateIdCode(),
      date: Date.now().toString(),
      type: (document.forms[1][0] as HTMLInputElement).value,
      description: (document.forms[1][1] as HTMLInputElement).value,
      value: (document.forms[1][2] as HTMLInputElement).value,
      status: (document.forms[1][3] as HTMLInputElement).value,
    }

    registers.push(formDataObj);

    //PARA TESTES, SALVA A ATUALIZAÇÃO DOS REGISTROS NO LOCAL STORAGE
    //PARA ATUALIZAR A TABELA DE REGISTROS.
    localStorage.setItem('registers', JSON.stringify(registers));
  }

  return (
    <div className="w-full h-full bg-slate-200/50 absolute top-0">
      <div className="w-2/4 h-2/4 bg-slate-800 absolute top-1/4 left-1/4 flex flex-col rounded text-white p-4">
        <div className="flex">
          <h1>Novo Registro</h1>
          <button onClick={props.toggleActive}><IconSquareLetterX stroke={2} /></button>
        </div>
        <form action="" className="flex flex-col mt-4" name="new-register">
          <input type="text" id="type" placeholder="Receita ou despesa?" className="rounded mb-4 pl-2 text-slate-800" />
          <input type="text" id="description" placeholder="Descrição" className="rounded mb-4 pl-2 text-slate-800" />
          <input type="number" id="value" placeholder="Valor" className="rounded mb-4 pl-2 text-slate-800" />
          <input type="text" placeholder="Status" className="rounded mb-4 pl-2 text-slate-800" />
          <button className="p-3 bg-slate-600 hover:bg-slate-400" onClick={(e) => saveNewRegister(e)}>Salvar</button>
        </form>
      </div>
    </div >
  )
}