export default function Filter() {
  return (
    <form action="">
      <select name="status" id="status" className="text-white bg-black">
        <option value="consolidada">Consolidada</option>
        <option value="cancelada">Cancelada</option>
        <option value="pendente">Pendente</option>
      </select>
    </form >
  )
}