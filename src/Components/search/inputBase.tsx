"use client";
import { ClassAttributes, InputHTMLAttributes, ReactElement } from "react";
import React from 'react'
import { useFormContext } from 'react-hook-form';

interface InputBaseProps {
    name: string;
    label: string;
    type?: string;
    placeholder: string;
}


export function InputBase({
    name,
    label,
    type = "text",
    placeholder,

}: ClassAttributes<HTMLInputElement> &
    InputHTMLAttributes<HTMLInputElement> &
    InputBaseProps): ReactElement {
    const { register, formState } = useFormContext();
    const error = formState.errors[name!];

    return (
        <div className='flex flex-col '>
            <label
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                htmlFor={name}>
                {label}
            </label>
            <input
                className='bg-gray-50 mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                type={type}
                placeholder={placeholder}
                {...register(name!)}

            />
            <div className="h-[15px] ">
                <p className="text-[10px] text-red-500 whitespace-nowrap">
                    {error?.message?.toString()}
                </p>
            </div>
        </div>
    )
}