import { IconChevronRight, IconCircleFilled, IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import Link from "next/link";
import registers from "../../data/registers.json";
import { useEffect, useState } from "react";

export default function Register() {

  const [registersArr, setRegistersArr] = useState<any>(() => {

    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem("registers");
      if (saved !== null) {
        const initialValue = JSON.parse(saved);
        return initialValue;
      } else {
        console.log("INITIAL", registers);
        return registers;
      }
    } else {
      return registers
    }
  });

  useEffect(() => {
    const checkStorageChanges = () => {
      if (typeof localStorage !== 'undefined') {
        const newData = localStorage.getItem('registers');
        if (newData !== null && JSON.parse(newData) !== registersArr) {
          console.log("NEW DATA", newData === JSON.stringify(registersArr))
          setRegistersArr(JSON.parse(newData));
        }
      }
    };
    console.log("storageData", registersArr);
    const intervalId = setInterval(checkStorageChanges, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div id="table" className="flex flex-col w-[65%]">
      {registersArr.map((reg: any) => (
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
      ))}
    </div>
  )
}