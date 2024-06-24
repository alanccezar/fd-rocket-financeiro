import { IconChevronLeft, IconEye } from "@tabler/icons-react";
import Link from "next/link";
import RegisterCard from "./RegisterCard";

export default function RegisterPanel() {
  return (
    <div className="text-white w-[65%] flex flex-col mx-auto">
      <Link href="/home" className="text-white w-24 flex"><IconChevronLeft stroke={2} /> Voltar</Link>

      <div className="bg-slate-800 rounded py-4 mt-4">
        <p className="flex px-2 items-center">Modo <span className="flex bg-slate-600 rounded ml-5 py-1 px-1"><IconEye stroke={2} className="mr-0.5" /> Visualização</span></p>
      </div>

      <RegisterCard />
    </div>
  )
}