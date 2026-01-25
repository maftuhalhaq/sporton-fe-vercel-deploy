import priceFormatter from "@/app/utils/price-formatter";
import { FiEdit2, FiEye, FiTrash2 } from "react-icons/fi";

const transactionData = [
  {
    date: "23/02/2026 19:36",
    customer: "John Doe",
    contact: "+1234567890",
    total: 150000,
    status: "Pending",
  },
  {
    date: "23/02/2026 19:36",
    customer: "John Doe 2",
    contact: "+1234567890",
    total: 150000,
    status: "Rejected",
  },
  {
    date: "23/02/2026 19:36",
    customer: "John Doe 3",
    contact: "+1234567890",
    total: 150000,
    status: "Paid",
  },
];

type TCategoryTableProps = {
  onViewDetails: () => void;
};

const TransactionTable = ({ onViewDetails }: TCategoryTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-300";
      case "paid":
        return "bg-green-100 text-green-800 border-green-300";
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className=" border-b border-gray-200">
            <th className="px-6 py-4 font-semibold">Date</th>
            <th className="px-6 py-4 font-semibold">Customer</th>
            <th className="px-6 py-4 font-semibold">Contact</th>
            <th className="px-6 py-4 font-semibold">Total</th>
            <th className="px-6 py-4 font-semibold">Status</th>
            <th className="px-6 py-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((data, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <td className="px-6 py-4 font-medium">{data.date}</td>
              <td className="px-6 py-4 font-medium">{data.customer}</td>
              <td className="px-6 py-4 font-medium">{data.contact}</td>
              <td className="px-6 py-4 font-medium">
                {priceFormatter(data.total)}
              </td>
              <td className="px-6 py-4 font-medium">
                <div
                  className={`px-4 py-1 rounded-full border text-center w-fit text-sm uppercase ${getStatusColor(data.status)}`}
                >
                  {data.status}
                </div>
              </td>
              <td className="px-6 py-7.5 flex items-center gap-3 text-gray-600">
                <button
                  onClick={onViewDetails}
                  className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-md"
                >
                  <FiEye size={18} />
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
