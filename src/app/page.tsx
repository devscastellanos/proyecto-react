"use client";
import { useRouter } from 'next/navigation';
import { Table } from "@/Components/table/table";
import { TableTr } from "@/Components/table/tableTr";
import React, { useEffect, useState } from 'react';
import { getUsers } from "@/services/listaUsuarios";
import { useUserContext } from "@/app/usuario/context/userContext"; 

export default function Home() {
  const router = useRouter();
  const { users, setUsers, addUser } = useUserContext();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const columnas = ["ID", "Nombre", "Apellido", "Email"];

  const getUsuarios = async () => {
    try {
      const res = await getUsers();
      console.log(res);
      if (res && Array.isArray(res.data)) {
        setUsers(res.data);
      } else {
        console.error("Formato de respuesta inesperado:", res);
        setUsers([]);
      }
    } catch (err) {
      console.error("Error al obtener los usuarios:", err);
      setError("Error al obtener los usuarios. Por favor, inténtelo más tarde.");
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsuarios();
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      addUser(userData);
    }
  }, []);

  return (
    <div className="flex flex-col w-full bg-custom">
      <div className="flex w-full justify-end mb-4">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => router.push('/usuario/createUser')}
        >
          Crear Usuario
        </button>
      </div>
      {error && (
        <div className="mb-4 text-red-500">
          {error}
        </div>
      )}
      <Table columns={columnas} isLoading={isLoading}>
        {users.length > 0 ? (
          users.map((usuario) => (
            <TableTr key={usuario.id}>
              <td className='py-4 text-base'>{usuario.id}</td>
              <td className='py-4 text-base'>{usuario.first_name}</td>
              <td className='py-4 text-base'>{usuario.last_name}</td>
              <td className='py-4 text-base'>{usuario.email}</td>
              <td className='py-4 text-base'>
                <button 
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                  onClick={() => router.push(`/usuario/${usuario.id}`)}
                >
                  Ver Detalles
                </button>
              </td>
            </TableTr>
          ))
        ) : (
          <tr>
            <td colSpan={columnas.length}>No hay usuarios disponibles</td>
          </tr>
        )}
      </Table>
    </div>
  );
}
