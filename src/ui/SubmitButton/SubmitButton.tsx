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
      className="rounded-md font-bold text-white px-2 py-1 disabled:bg-gray-300 disabled:text-gray-100 bg-emerald-600"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
