import React, { ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
  disabled?: boolean;
};

const SubmitButton = ({ children, disabled = false }: PropsType) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      className="rounded-md font-bold text-gray-50 px-4 py-2 disabled:bg-gray-400 disabled:text-gray-100 bg-green-600 hover:bg-orange-400"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
