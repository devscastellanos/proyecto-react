"use client"
import { ReactNode } from "react";

interface SuccesProp {
  children: ReactNode;
  proceso: string;
}
export const Succes = ({ children,proceso }: SuccesProp)=>{
    return(
        <>
        <ol className="flex justify-center max-w-50 pt-5">
        <li>
        <div className="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400" role="alert">
            <div className="flex items-center justify-between">
                <span className="sr-only">{children}</span>
                <h3 className="font-medium">Usuario {children} {proceso}</h3>
                <svg className="w-4 h-4 ml-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </div>
        </div>
    </li>
        </ol>
        </>
    )
}