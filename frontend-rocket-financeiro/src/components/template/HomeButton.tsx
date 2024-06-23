import { IconCurrencyDollar } from "@tabler/icons-react";
import Link from "next/link";



export default function HomeButton() {
  return (
    <Link href="/" className="w-full h-[100px] flex justify-center items-center bg-blue-500 rounded-tr-3xl text-white"><IconCurrencyDollar stroke={2} /></Link>
  )
}