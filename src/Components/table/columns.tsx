import React from "react";

interface ColumnsProps {
  columns: string[];
}
export const ColumnsTable = ({ columns }: ColumnsProps) => {
  return (
    <thead className={`text-lg ${columns.length > 0 && "border-b"} h-10`}>
      <tr>
        {columns.map((item, index) => (
          <th
            key={item + index}
            className="text-medium-blue text-start font-bold py-4"
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};
