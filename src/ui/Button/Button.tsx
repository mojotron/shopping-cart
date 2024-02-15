import { ReactNode } from 'react';

type BtnType = 'default' | 'remove' | 'increment' | 'none';

type PropsType = {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
  type?: BtnType;
};

const getBtnTypeColors = (type: BtnType) => {
  if (type === 'remove') {
    return 'bg-red-400 rounded-md';
  }
  if (type === 'increment') {
    return 'bg-emerald-400 rounded-full w-8 h-8 ';
  }
  if (type === 'none') {
    return '';
  }
  return 'bg-emerald-600 rounded-md';
};

const Button = ({
  onClick,
  disabled = false,
  type = 'default',
  children,
}: PropsType) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`font-bold text-white px-2 py-1 disabled:bg-gray-300 disabled:text-gray-100 ${getBtnTypeColors(type)}`}
    >
      {children}
    </button>
  );
};

export default Button;
