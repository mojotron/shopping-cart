import { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import {
  FaPhone as IconPhone,
  FaClock as IconClock,
  FaLocationDot as IconLocation,
} from 'react-icons/fa6';
import { IoMail as IconMail } from 'react-icons/io5';
import PageSection from '../../ui/PageSection/PageSection';
import Heading from '../../ui/Heading/Heading';

import SubmitButton from '../../ui/SubmitButton/SubmitButton';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
  });
  const handleChangeData = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((oldValue) => ({ ...oldValue, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({ name: '', email: '', question: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col text-neutral-800 flex items-center flex-col gap-4"
    >
      <Heading level={3}>have a question?</Heading>
      <div className="flex flex-col gap-2">
        <label htmlFor="customer-name">Name</label>
        <input
          id="customer-name"
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChangeData}
          className=" border border-emerald-400 rounded-md py-1 px-2"
          placeholder="Enter your name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="customer-email">Email</label>
        <input
          id="customer-email"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChangeData}
          className=" border border-emerald-400 rounded-md py-1 px-2"
          placeholder="Enter your email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="customer-question">Question</label>
        <textarea
          id="customer-question"
          name="question"
          value={formData.question}
          required
          onChange={handleChangeData}
          className=" border border-emerald-400 rounded-md py-1 px-2"
          placeholder="Enter your question"
        />
      </div>
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
};

const ContactPage = () => {
  return (
    <main className="flex flex-col items-center py-16">
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
