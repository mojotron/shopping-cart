import PageSection from '../../ui/PageSection/PageSection';
import Heading from '../../ui/Heading/Heading';
import ContactForm from './ContactForm';
import Contacts from './Contacts';

const ContactPage = () => {
  return (
    <main className="flex flex-col items-center py-16">
      <PageSection>
        <Heading level={1}>Contact</Heading>
        <div className="flex gap-8">
          <ContactForm />
          <Contacts />
        </div>
      </PageSection>
    </main>
  );
};

export default ContactPage;
