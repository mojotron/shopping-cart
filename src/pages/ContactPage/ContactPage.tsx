import { ReactElement } from 'react';
import {
  FaInstagram as IconIns,
  FaFacebook as IconFb,
  FaXTwitter as IconX,
  FaPhone as IconPhone,
  FaClock as IconClock,
  FaLocationDot as IconLocation,
} from 'react-icons/fa6';
import { IoMail as IconMail } from 'react-icons/io5';
import PageSection from '../../ui/PageSection/PageSection';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';

const ICON_SIZE = 20;

const contactConfig = [
  {
    label: 'address',
    icon: <IconLocation size={ICON_SIZE} />,
    text: 'Pumpkin Hill, Happyvile WD',
  },
  {
    label: 'phone',
    icon: <IconPhone size={ICON_SIZE} />,
    text: '0010 200 3456',
  },
  {
    label: 'email',
    icon: <IconMail size={ICON_SIZE} />,
    text: 'vage-to-table@example.com',
  },
  {
    label: 'working hours',
    icon: <IconClock size={ICON_SIZE} />,
    text: 'Mon-Sat (08:00 - 18:00)',
  },
];

const ContactItem = ({
  label,
  icon,
  text,
}: {
  label: string;
  icon: ReactElement;
  text: string;
}) => {
  return (
    <li className="flex gap-2 items-center">
      <div className="border border-emerald-600 p-2 rounded-full text-emerald-600">
        {icon}
      </div>
      <div>
        <Heading level={5}>{label}</Heading>
        <p>{text}</p>
      </div>
    </li>
  );
};

const GetInTouch = () => {
  return (
    <div className="flex flex-col gap-5">
      <Heading level={3}>get in touch</Heading>
      <ul className="flex flex-col gap-3">
        {contactConfig.map((ele) => (
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

const ContactForm = () => {
  return (
    <form>
      <Heading level={3}>have a question?</Heading>
      <label>
        name
        <input type="text" />
      </label>
      <label>
        email
        <input type="email" />
      </label>
      <label>
        question
        <textarea />
      </label>
    </form>
  );
};

const ContactPage = () => {
  return (
    <main className="flex flex-col items-center">
      <PageSection>
        <Heading level={1}>Contact</Heading>
        <div className="flex gap-8">
          <ContactForm />
          <GetInTouch />
        </div>
      </PageSection>
    </main>
  );
};

export default ContactPage;
