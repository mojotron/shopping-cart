import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button/Button';
import Heading from '../../ui/Heading/Heading';
import PageSection from '../../ui/PageSection/PageSection';
import Paragraph from '../../ui/Paragraph/Paragraph';
import Banner from './components/Banner';
import VisionSection from './components/VisionSection';
import CareerSection from './components/CareerSection';

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col gap-24 items-center text-center">
      <header className="space-y-6 px-8">
        <Heading>Who We Are</Heading>
        <Paragraph size="small">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          tenetur tempora beatae adipisci provident, et a eum, iure ea impedit
          ducimus amet sed dolorum maiores laborum sapiente architecto totam
          nulla? Laudantium molestiae sed sapiente beatae vitae labore est
          reiciendis. Asperiores aperiam odit dolore excepturi sunt ad culpa?
          Fuga veritatis commodi minus assumenda laudantium et in
          necessitatibus, error illum hic delectus.
        </Paragraph>
        <Banner />
      </header>

      <VisionSection />
      <CareerSection />

      <PageSection>
        <div className="bg-emerald-600 rounded-md p-16 flex flex-col items-center justify-center gap-8">
          <Heading level={3}>
            We grow organic healthy vegetables for you. So you can have one
            stress less in your life.
          </Heading>
          <Button type="remove" onClick={() => navigate('/store')}>
            Go To Store
          </Button>
        </div>
      </PageSection>
    </main>
  );
};

export default AboutPage;
