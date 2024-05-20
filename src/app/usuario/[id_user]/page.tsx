"use client";
import { MainLayout } from "@/layouts/mainLayout";
import { useParams } from "next/navigation";
import { getUser,deleteUser } from "@/services/listaUsuarios";
import React, { useEffect, useState } from 'react';
import { Data } from "@/types/usuarios";
import { useRouter } from 'next/navigation';
import { Spinner } from "@/Components/table/spinner";
import { Succes } from "../deleteUser/page";

export default function UserDetail() {
    const router = useRouter();
    const [user, setUser] = useState<Data | null>(null); 
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const params = useParams();
    const id_user = Number(params.id_user);
    const [isUserDeleted, setIsUserDeleted] = useState(false);

    function getUserFunc() {
        getUser(id_user).then((res) => {
          console.log(res.data);
          setUser(res.data);
          setIsLoading(false);
          console.log(typeof params)
        }).catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
    const handleDeleteUser = async () => {
        try {
        const response = await deleteUser(id_user);
        console.log(response);
        setIsUserDeleted(true);
        //router.push(`/`);
        } catch (error) {
          console.error("Error al eliminar el usuario:", error);
        }
      };

    useEffect(() => {
        getUserFunc();
    }, []);

    console.log(id_user);
    
    return (
        <MainLayout>
            <div className="flex justify-center pt-4">
                {isLoading ? (
                    <Spinner></Spinner>
                ) : (
                    user && (
                        <>
                            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                                <div className="flex flex-col items-center pb-10 pt-4">
                                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.avatar} alt={user.first_name}/>
                                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.first_name}</h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
                                    <div className="flex mt-4 md:mt-6">
                                        <a
                                        className="inline-flex items-center cursor-pointer px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        onClick={() => router.push(`/`)}>Volver</a>
                                        <a
                                        onClick={handleDeleteUser}
                                        className="py-2 px-4 cursor-pointer ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Eliminar</a>
                                    </div>
                                </div>
                            </div>

                        </>
                    )
                )}
            </div>
            {isUserDeleted && <Succes proceso="eliminado">{id_user}</Succes>}
        </MainLayout>
    );
}