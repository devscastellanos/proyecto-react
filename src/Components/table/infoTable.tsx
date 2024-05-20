interface TableHeadersProps {
    children: React.ReactNode;
  }
  export const InfoTable = ({ children }: TableHeadersProps) => {
    return (
      <tbody className="text-xs font-normal w-full text-white">
        {children}
      </tbody>
    );
  };