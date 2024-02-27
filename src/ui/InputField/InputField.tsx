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
        className="border border-emerald-400 px-4 py-1 rounded-md text-emerald-600 font-bold placeholder:text-neutral-400 outline-none focus:ring focus:ring-emerald-200 focus:ring-offset-0"
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
        className="border border-emerald-400 px-4 py-1 rounded-md text-emerald-600 font-bold placeholder:text-neutral-400 outline-none focus:ring focus:ring-emerald-200 focus:ring-offset-0"
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
      <label className="font-righteous font-bold text-emerald-600" htmlFor={id}>
        {label}
      </label>
      {inputMarkdown}
    </div>
  );
};

export default InputField;
