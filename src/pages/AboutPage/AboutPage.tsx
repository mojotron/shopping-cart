import {
  GiBullseye as IconTarget,
  GiAbstract079 as IconFlower,
  GiArrowDunk as IconNoWaste,
  GiAsparagus as IconGarden,
} from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';
import Button from '../../ui/Button/Button';
import Heading from '../../ui/Heading/Heading';
import PageSection from '../../ui/PageSection/PageSection';
import Paragraph from '../../ui/Paragraph/Paragraph';
import Banner from './components/Banner';
import TextImageBlock from '../../components/TextImageBlock/TextImageBlock';
import type { TextImageBlockType } from '../../types/textImageBlockType';
import TextIconBlock from '../../components/TextIconBlock/TextIconBlock';

type VisionType = {
  title: string;
  text: string;
  icon: ReactNode;
  bullets: string[];
};
const visionConfig: VisionType[] = [
  {
    title: 'better and healthier food option',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eaque optio quam voluptatum impedit vero.',
    icon: <IconTarget size={50} />,
    bullets: [
      'Lorem ipsum dolor 1',
      'Lorem ipsum dolor 2',
      'Lorem ipsum dolor 3',
    ],
  },
  {
    title: 'sustainable economy',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat labore dolores libero pariatur aliquid necessitatibus accusantium maiores corrupti veniam.',
    icon: <IconFlower size={50} />,
    bullets: [
      'Lorem ipsum dolor 1',
      'Lorem ipsum dolor 2',
      'Lorem ipsum dolor 3',
    ],
  },
  {
    title: 'ecological gardening methods',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, recusandae quo! Dolor hic possimus, et aliquid nulla illum alias debitis explicabo doloremque neque labore dolorem minima ea odit, consequatur quisquam!',
    icon: <IconGarden size={50} />,
    bullets: [
      'Lorem ipsum dolor 1',
      'Lorem ipsum dolor 2',
      'Lorem ipsum dolor 3',
    ],
  },
  {
    title: 'zero waste policy',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum voluptatem magni accusamus optio neque excepturi?',
    icon: <IconNoWaste size={50} />,
    bullets: [
      'Lorem ipsum dolor 1',
      'Lorem ipsum dolor 2',
      'Lorem ipsum dolor 3',
    ],
  },
];

const configTextImageBlocks: TextImageBlockType[] = [
  {
    title: 'Gardening',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus debitis nostrum odit, totam delectus corporis? Impedit repudiandae dolorum architecto?',
    bullets: [
      'you love soil',
      'you love to work with your hands',
      'you can work in dynamic team',
    ],
    imageUrl: './images/jonathan-kemper-gardening.jpg',
    orientation: 'left',
  },
  {
    title: 'Delivery',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus debitis nostrum odit, totam delectus corporis? Impedit repudiandae dolorum architecto?',
    bullets: [
      'we need van and scooter drivers',
      'we need people for our packeting',
      'we need people to organize shipment',
    ],
    imageUrl: './images/annie-spratt-delivery.jpg',
    orientation: 'right',
  },
  {
    title: 'Web Development',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus debitis nostrum odit, totam delectus corporis? Impedit repudiandae dolorum architecto?',
    bullets: [
      'react with typescript',
      'express and mongo db',
      'love to learn new tech',
    ],
    imageUrl: './images/clement-helardot-web-dev.jpg',
    orientation: 'left',
  },
];

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col gap-24 items-center text-center">
      <PageSection>
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
      </PageSection>

      <PageSection>
        <Heading level={2}>What is Our Vision</Heading>
        <Paragraph size="small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quos
          asperiores quas ipsum in eum tempora debitis dolorem quasi sed
          laborum, perferendis corporis reiciendis doloribus. Eum accusantium
          autem aliquid architecto.
        </Paragraph>
        {/*  */}
        <div className="flex flex-col gap-8 items-center">
          {visionConfig.map((vision) => (
            <TextIconBlock key={vision.title} data={vision} />
          ))}
        </div>
      </PageSection>

      <PageSection>
        <Heading level={2}>We always need new hands on dack</Heading>
        <Heading level={3}>Career Options</Heading>
        {configTextImageBlocks.map((block) => (
          <TextImageBlock key={block.title} data={block} />
        ))}
      </PageSection>

      <PageSection>
        <Heading level={1}>Join Our Team</Heading>
        <Button onClick={() => {}}>Apply now</Button>
      </PageSection>

      <PageSection>
        <div className="bg-emerald-600 rounded-md p-16 flex flex-col items-center justify-center gap-8">
          <Heading level={3} color="secondary">
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
