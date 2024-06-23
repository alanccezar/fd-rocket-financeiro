import AddNewRegister from "./AddNewRegister";
import Filter from "./Filter";

interface Header {
  titulo: string;
  notifications?: string;
}

export default function Header(props: Header) {
  return (
    <header className="w-full h-1/6 flex">
      <div className="flex flex-col">
        <h1 className="text-white">
          {props.titulo}
        </h1>
        <h4 className="text-white">{props.notifications}</h4>
      </div>
      <div className="">
        <Filter />
        <AddNewRegister />
      </div>
    </header>
  )
}