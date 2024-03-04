import { useState, ChangeEvent, FormEvent } from 'react';
import InputField from '../../../ui/InputField/InputField';
import SubmitButton from '../../../ui/SubmitButton/SubmitButton';
import Heading from '../../../ui/Heading/Heading';

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
    // TODO temp
    alert(JSON.stringify(formData));
    setFormData({ name: '', email: '', question: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Heading level={3}>Have a Question?</Heading>
      <InputField
        id="customer-name"
        label="name"
        name="name"
        placeholder="enter name"
        value={formData.name}
        onChange={handleChangeData}
      />
      <InputField
        id="customer-email"
        label="email"
        name="email"
        placeholder="enter email"
        value={formData.email}
        type="email"
        onChange={handleChangeData}
      />
      <InputField
        id="customer-question"
        label="question"
        name="question"
        placeholder="enter question"
        value={formData.question}
        type="textarea"
        onChange={handleChangeData}
      />
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
};

export default ContactForm;
