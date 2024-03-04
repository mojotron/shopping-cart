import Heading from '../../ui/Heading/Heading';
import ContactForm from './components/ContactForm';
import Contacts from './components/Contacts';

const ContactPage = () => {
  return (
    <main className="text-center mx-auto space-y-8">
      <Heading level={1}>Contact</Heading>
      <div className="text-left flex flex-col gap-16 sm:flex-row sm:gap-8">
        <ContactForm />
        <Contacts />
      </div>
    </main>
  );
};

export default ContactPage;
