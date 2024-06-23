import Link from "next/link";

export default function Login() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col h-80 justify-evenly">
        <h1 className="text-white font-bold text-2xl">Rocket Finanças</h1>
        <form action="" className="flex flex-col">
          <input type="email" placeholder="Email" required className="mb-2 pl-2" />
          <input type="password" placeholder="Senha" required className="mb-2 pl-2" />
          <input type="submit" value="Entrar" className="bg-slate-800 text-white py-2 px-2 rounded" />
        </form>
        <p className="text-white">
          Não tem cadastro? <Link href="/">clique aqui</Link>
        </p>
      </div>
    </main>
  )
}