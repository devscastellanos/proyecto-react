"use client"
import { ReactNode } from "react";

interface PageProp {
    paddingTop?: string;
    children: ReactNode;
  }

export const Pagination = ({
  children,
  paddingTop,
}: PageProp) => {

  return (
    <main className="relative h-screen overflow-hidden rounded-2xl">
        <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-base h-10">
            <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{children}</a>
            </li>
            <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
        </ul>
        </nav>

    </main>
  );
};