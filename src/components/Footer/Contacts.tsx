import { CONTACT_CONFIG } from '../../constants/contacts';
import Heading from '../../ui/Heading/Heading';

const Contacts = () => {
  return (
    <div className="space-y-2">
      <Heading level={5}>Contacts</Heading>
      <ul className="space-y-3">
        {CONTACT_CONFIG.map((contact) => (
          <p key={contact.label} className="flex gap-2 items-center">
            <span className="text-green-600">{contact.icon}</span>{' '}
            <span>{contact.text}</span>
          </p>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
