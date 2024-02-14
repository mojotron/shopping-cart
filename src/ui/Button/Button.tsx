import { ReactNode } from 'react';

type BtnType = 'default' | 'remove' | 'increment';

type PropsType = {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
  type?: BtnType;
};

const getBtnTypeColors = (type: BtnType) => {
  if (type === 'remove') {
    return 'bg-red-400';
  }
  if (type === 'increment') {
    return 'bg-gray-400';
  }
  return 'bg-emerald-400';
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
      className={`px-2 py-1 disabled:bg-gray-300 disabled:text-gray-100 ${getBtnTypeColors(type)}`}
    >
      {children}
    </button>
  );
};

export default Button;
