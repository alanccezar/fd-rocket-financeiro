import { IconUserCircle } from "@tabler/icons-react";
import Link from "next/link";



export default function UserAvatarButton() {
  return (
    <Link href="/" className="w-full h-[100px] flex justify-center items-center text-white"><IconUserCircle stroke={2} /></Link>
  )
}