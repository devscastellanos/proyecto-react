"use client";

import { createUserSchema } from "@/helpers/validator";
import { Data } from "@/types/usuarios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { InputBase } from "../../../Components/search/inputBase";
import { addUser } from "@/services/listaUsuarios";
import { useRouter } from 'next/navigation';
import { Succes } from "../deleteUser/page";
import React, {useState } from 'react';

export default function CreateUser() {
  const router = useRouter();
  const [isUserCreated, setIsUserCreated] = useState(false);
  const [createdUserId, setCreatedUserId] = useState<number | null>(null); 
  const methods = useForm<Data>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      avatar: ""
    },
    resolver: yupResolver(createUserSchema),
  });

  const onSubmit: SubmitHandler<Data> = async (data: Data) => {
    try {
      const response = await addUser(data);
      console.log("Usuario creado con éxito:", response);
      setIsUserCreated(true);
      const userId = parseInt(response.id); // Convertir el ID a número
      setCreatedUserId(userId); 
      setTimeout(() => {
        router.push("/");
      }, 4000);
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      // Maneja el error, tal vez mostrando un mensaje al usuario.
    }
  };

  return (
<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-custom">
      <div className="p-10 rounded-lg flex flex-col items-center justify-center shadow-lg">
        <h1 className="text-4xl text-dark-blue font-bold text-stone-50">
          Crear Usuario
        </h1>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <div className="grid grid-cols-2 gap-7 mt-10 mb-7">
                <div className="text-black flex flex-col gap-3">
                  <InputBase
                    name="first_name"
                    label={"Nombre"}
                    placeholder={"Ingrese su nombre"}
                  />
                  <InputBase
                    name="avatar"
                    label={"Avatar"}
                    placeholder={"Ingrese su avatar"}
                  />
                </div>
                <div className="text-black flex flex-col gap-3">
                  <InputBase
                    name="last_name"
                    label={"Apellido"}
                    placeholder={"Ingrese su apellido"}
                  />
                  <InputBase
                    name="email"
                    label={"Correo"}
                    placeholder={"Ingrese su correo"}
                    type="email"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Crear Usuario
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
      {isUserCreated && <Succes proceso="creado">{createdUserId}</Succes>}
    </main>
  );
}