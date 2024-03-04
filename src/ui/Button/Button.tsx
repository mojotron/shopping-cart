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
    return 'bg-orange-600 rounded-md hover:bg-orange-400';
  }
  if (type === 'increment') {
    return 'bg-green-400 rounded-full size-8';
  }
  if (type === 'none') {
    return '';
  }
  return 'bg-green-600 rounded-md hover:bg-green-400';
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
      className={`border border-gray-50 font-bold text-sm px-2 py-1 text-gray-50  disabled:bg-gray-400 disabled:text-gray-50 ${getBtnTypeColors(type)}`}
    >
      {children}
    </button>
  );
};

export default Button;
