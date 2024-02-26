type PropsType = {
  id: string;
  label: string;
  placeholder: string;
  type?: 'text';
  name?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
};

const InputField = ({
  id,
  label,
  placeholder,
  type = 'text',
  required = false,
  name = '',
  value,
  onChange,
}: PropsType) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        className="border border-emerald-400 px-4 py-1 rounded-md text-emerald-600 font-bold placeholder:text-neutral-400 outline-none focus:ring focus:ring-emerald-200 focus:ring-offset-0"
        id={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        name={name}
      />
    </div>
  );
};

export default InputField;
