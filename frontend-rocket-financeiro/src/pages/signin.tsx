import Link from "next/link";

export default function SignIn() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col h-80 justify-evenly">
        <h1 className="text-white text-center font-bold text-2xl">Rocket Finanças</h1>
        <h4 className="text-slate-400 text-center">Faça seu cadastro</h4>
        <form action="" className="flex flex-col">
          <input type="email" placeholder="Email" required className="mb-2 pl-2" />
          <input type="password" placeholder="Nova Senha" required className="mb-2 pl-2" />
          <input type="password" placeholder="Confirme Sua Senha" required className="mb-2 pl-2" />
          <input type="submit" value="Cadastrar" className="bg-slate-800 text-white py-2 px-2 rounded cursor-pointer mb-2" />
          <Link href="/login" className="bg-red-800 text-white text-center py-2 px-2 rounded">Cancelar</Link>
        </form>
      </div>
    </main>
  )
}