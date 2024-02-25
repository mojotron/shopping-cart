import { FaCheckCircle as IconCheck } from 'react-icons/fa';

type PropsType = {
  label: string;
  color?: 'primary' | 'secondary';
};

const CheckLabel = ({ label, color = 'primary' }: PropsType) => {
  return (
    <li
      className={`flex gap-2 items-center ${color === 'primary' ? 'text-emerald-600' : 'text-emerald-50'} font-bold`}
    >
      <IconCheck size={18} /> <span>{label}</span>
    </li>
  );
};

export default CheckLabel;
