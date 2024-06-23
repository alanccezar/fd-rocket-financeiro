import { IconCurrencyDollar, IconUserCircle } from "@tabler/icons-react";

export default function MainMenu() {
  return (
    <aside className="w-[100px] h-screen flex flex-col justify-between bg-slate-800">
      <div className="w-[100px] h-[100px] flex justify-center items-center bg-blue-500 rounded-tr-3xl"><IconCurrencyDollar stroke={2} /></div>
      <div className="w-[100px] h-[100px] flex justify-center items-center"><IconUserCircle stroke={2} /></div>
    </aside>
  )
}