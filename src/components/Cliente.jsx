import { useNavigate } from 'react-router-dom'

const Cliente = ({cliente}) => {

    const navigate = useNavigate()
    const {nombre, empresa, email, telefono, id} = cliente

    return (
      <tr className="border-b hover:bg-gray-50">
        <td className="p-6">
          <p className="text-2xl text-center text-gray-800">{nombre}</p>
        </td>
        <td className="p-6">
          <p className="text-md text-center text-gray-800">{empresa}</p>
        </td>
        <td className="p-6">
          <p className="flex flex-col text-md items-center text-left font-semibold text-gray-800 ">
            <span>Email: {email}</span>
            <span>Tel: {telefono}</span>
          </p>
        </td>
        <td className="p-6 flex gap-3  justify-center center">
          <button
            type="button"
            className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
            onClick={() => navigate(`/clientes/${id}/editar`)}
          >
            Editar
          </button>
          <button
            type="button"
            className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
          >
            Eliminar
          </button>
        </td>
      </tr>
    );
}

export default Cliente