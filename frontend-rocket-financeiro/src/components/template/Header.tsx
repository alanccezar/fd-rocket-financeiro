import useToggle from "@/hooks/useToggle";
import AddNewRegister from "./AddNewRegister";
import Filter from "./Filter";


interface Header {
  titulo?: string;
  notifications?: string;
  activate: boolean;
  toggleActive: () => void;
}

export default function Header(props: Header) {

  //const [activate, setActive] = useToggle(false);

  return (
    <header className="w-full h-1/6 flex justify-center">
      <div className="flex flex-col w-2/5 justify-center">
        <h1 className="text-white text-2xl font-bold">
          {props.titulo}
        </h1>
        <h4 className="font-thin text-slate-400">{props.notifications}</h4>
      </div>
      <div className="w-1/4 flex items-center justify-around">
        <Filter />
        <AddNewRegister activate={props.activate} toggleActive={props.toggleActive} />
      </div>
    </header>
  )
}