"use client";
// components/MainLayout.tsx
import { ReactNode } from "react";
import { UserProvider } from "@/app/usuario/context/userContext"; 

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <UserProvider> {/* Envuelve todo el contenido con el proveedor de contexto aquí */}
      <main className="relative h-screen overflow-hidden rounded-2xl">
        <div className="flex items-start justify-between h-full">
          <div className="flex flex-col w-full h-full">
            <div className="h-full w-full bg-transparent overflow-hidden pt-10">
              <div className="overflow-auto w-full h-100 px-10 pb-8">
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>
    </UserProvider>
  );
};

