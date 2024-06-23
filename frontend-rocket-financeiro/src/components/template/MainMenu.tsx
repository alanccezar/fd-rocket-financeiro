import { IconCurrencyDollar, IconUserCircle } from "@tabler/icons-react";
import HomeButton from "./HomeButton";
import UserAvatarButton from "./UserAvatarButton";

export default function MainMenu() {
  return (
    <aside className="w-[100px] h-screen flex flex-col justify-between bg-slate-800">
      <HomeButton />
      <UserAvatarButton />
    </aside>
  )
}