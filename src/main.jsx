import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './components/Layout'
import NuevoCliente, { action as nuevoClienteAction } from './pages/NuevoCliente'
import Index, { loader as clientesLoader} from './pages/Index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import EditarCliente, { loader as EditarClienteLoader, action as  EditarClienteAction}  from './pages/EditarCliente'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: clientesLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente/>,
        action: nuevoClienteAction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente/>,
        loader: EditarClienteLoader,
        action: EditarClienteAction,
        errorElement: <ErrorPage/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
