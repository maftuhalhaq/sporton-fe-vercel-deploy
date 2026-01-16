type TcardwithHeader = {
  title: string;
  children: React.ReactNode;
};

const CardwithHeader = ({ title, children }: TcardwithHeader) => {
  return (
    <div className="bg-white">
      <div className="px-5 py-4 border-b border-gray-200">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default CardwithHeader;
