import { ReactNode, ChangeEvent } from 'react';

type PropsType = {
  id: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'textarea' | 'email';
  name?: string;
  required?: boolean;
  value: string;

  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const InputField = ({
  id,
  label,
  placeholder,
  type = 'text',
  required = true,
  name = '',
  value,

  onChange,
}: PropsType) => {
  let inputMarkdown: ReactNode;
  if (type === 'text' || type === 'email') {
    inputMarkdown = (
      <input
        className="border border-green-400 px-4 py-1 rounded-md text-gray-600 font-bold placeholder:text-gray-400 outline-none focus:ring focus:ring-green-400 focus:ring-offset-0"
        id={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        type={type}
        name={name}
      />
    );
  } else if (type === 'textarea') {
    inputMarkdown = (
      <textarea
        className="border border-green-400 px-4 py-1 rounded-md text-gray-600 font-bold placeholder:text-gray-400 outline-none focus:ring focus:ring-green-400 focus:ring-offset-0"
        id={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        name={name}
      />
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="font-righteous font-bold text-gray-600" htmlFor={id}>
        {label}
      </label>
      {inputMarkdown}
    </div>
  );
};

export default InputField;
