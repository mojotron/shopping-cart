import { FaCheckCircle as IconCheck } from 'react-icons/fa';

type PropsType = {
  label: string;
  color?: 'primary' | 'secondary';
};

const CheckLabel = ({ label, color = 'primary' }: PropsType) => {
  return (
    <li
      className={`text-sm sm:text-base flex gap-2 items-center ${color === 'primary' ? 'text-green-600' : 'text-green-100'} font-bold`}
    >
      <IconCheck size={18} /> <span>{label}</span>
    </li>
  );
};

export default CheckLabel;
