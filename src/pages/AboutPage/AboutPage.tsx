import {
  GiBullseye as IconTarget,
  GiAbstract079 as IconFlower,
  GiArrowDunk as IconNoWaste,
  GiAsparagus as IconGarden,
} from 'react-icons/gi';
import { ReactNode } from 'react';
import Button from '../../ui/Button/Button';
import CheckLabel from '../../ui/CheckLabel/CheckLabel';
import Heading from '../../ui/Heading/Heading';
import PageSection from '../../ui/PageSection/PageSection';
import Paragraph from '../../ui/Paragraph/Paragraph';
import Banner from './components/Banner';
import { useNavigate } from 'react-router-dom';

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
    bullets: ['temp 1', 'temp 2', 'temp 3'],
  },
  {
    title: 'sustainable economy',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat labore dolores libero pariatur aliquid necessitatibus accusantium maiores corrupti veniam.',
    icon: <IconFlower size={50} />,
    bullets: ['temp 1', 'temp 2', 'temp 3'],
  },
  {
    title: 'ecological gardening methods',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, recusandae quo! Dolor hic possimus, et aliquid nulla illum alias debitis explicabo doloremque neque labore dolorem minima ea odit, consequatur quisquam!',
    icon: <IconGarden size={50} />,
    bullets: ['temp 1', 'temp 2', 'temp 3'],
  },
  {
    title: 'zero waste policy',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum voluptatem magni accusamus optio neque excepturi?',
    icon: <IconNoWaste size={50} />,
    bullets: ['temp 1', 'temp 2', 'temp 3'],
  },
];

const VisionBlock = ({ data }: { data: VisionType }) => {
  return (
    <div className="w-[400px] flex flex-col items-center gap-5">
      <Heading level={3}>{data.title}</Heading>
      <div className="flex items-center gap-4">
        <div className="border border-emerald-600 rounded-full p-4 text-emerald-600">
          {data.icon}
        </div>
        <Paragraph size="small">{data.text}</Paragraph>
      </div>

      <ul>
        {data.bullets.map((ele) => (
          <CheckLabel key={ele} label={ele} />
        ))}
      </ul>
    </div>
  );
};

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col gap-24 items-center text-center">
      <PageSection>
        <Heading level={1}>Who We Are</Heading>
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
            <VisionBlock key={vision.title} data={vision} />
          ))}
        </div>
      </PageSection>

      <PageSection>
        <Heading level={2}>Join Our Team</Heading>
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
