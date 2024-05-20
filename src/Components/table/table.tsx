"use client"
import { ReactNode } from "react";
import { InfoTable } from "./infoTable";
import React from "react";
import { ColumnsTable } from "./columns";
import { Spinner } from "./spinner";

interface TableProps {
  columns?: string[];
  children: ReactNode;
  isLoading?: boolean;
}
export const Table = ({
  columns,
  isLoading,
  children,
}: TableProps) => {
  return (
    <div className="w-full h-full">
      <table className="table-auto text-start w-full h-full text-white mx-4">
        <ColumnsTable columns={columns!} />
        <InfoTable>{children}</InfoTable>
      </table>
      {isLoading && (
        <div className="flex w-full justify-center h-full">
          <Spinner></Spinner>
        </div>
      )}
    </div>
  );
};
