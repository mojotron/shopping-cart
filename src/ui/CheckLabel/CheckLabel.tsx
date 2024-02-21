import { FaCheckCircle as IconCheck } from 'react-icons/fa';

const CheckLabel = ({ label }: { label: string }) => {
  return (
    <li className="flex gap-2 items-center text-emerald-600 font-bold">
      <IconCheck size={18} className="" /> <span>{label}</span>
    </li>
  );
};

export default CheckLabel;
