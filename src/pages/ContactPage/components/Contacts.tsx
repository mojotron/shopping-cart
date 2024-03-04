import { ReactNode } from 'react';
import { CONTACT_CONFIG } from '../../../constants/contacts';
import Heading from '../../../ui/Heading/Heading';

const ContactItem = ({
  label,
  icon,
  text,
}: {
  label: string;
  icon: ReactNode;
  text: string;
}) => {
  return (
    <li className="flex gap-2 items-center">
      <div className="border border-green-600 p-2 rounded-full text-green-600">
        {icon}
      </div>
      <div>
        <Heading level={5}>{label}</Heading>
        <p className="text-gray-600">{text}</p>
      </div>
    </li>
  );
};

const Contacts = () => {
  return (
    <div className="flex flex-col gap-5">
      <Heading level={3}>get in touch</Heading>
      <ul className="flex flex-col gap-3">
        {CONTACT_CONFIG.map((ele) => (
          <ContactItem
            key={ele.label}
            label={ele.label}
            icon={ele.icon}
            text={ele.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
