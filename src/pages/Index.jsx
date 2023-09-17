import { useLoaderData } from 'react-router-dom'
import Cliente from '../components/Cliente';
import { obtenerClientes } from '../data/Cliente';

export function loader() {

  const clientes = obtenerClientes()
  return clientes
}

const Index = () => {

  const clientes = useLoaderData()

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">
        Clientes
      </h1>
      <p className="mt-3">Administra tus clientes</p>

      {clientes.length ? (
        <table className="w-full mt-5 table-auto shadow bg-white">
          <thead className='bg-blue-800 text-white'>
            <tr>
              <th className='p-2'>Nombre</th>
              <th className='p-2'>Empresa</th>
              <th className='p-2'>Contacto</th>
              <th className='p-2'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map( cliente => (
              <Cliente
                cliente={cliente}
                key={cliente.id}
              />
            ))}
          </tbody>
        </table>
      ) : (

        <p className='text-center mt-10'>No hay clientes</p>
      )}
    </>
  )
}

export default Index