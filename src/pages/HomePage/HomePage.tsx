import { GiPathDistance, GiBeech, GiBootPrints } from 'react-icons/gi';
import Slider from '../../ui/Slider/Slider';
import testimonialData from '../../data/testimonials.json';
import Testimonial from '../../components/Testimonial/Testimonial';
import TextImageBlock from '../../components/TextImageBlock/TextImageBlock';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';
import { TextImageBlockType } from '../../types/textImageBlockType';

const configTextImageBlocks: TextImageBlockType[] = [
  {
    title: 'Organic',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus debitis nostrum odit, totam delectus corporis? Impedit repudiandae dolorum architecto?',
    bullets: ['pesticide-free', 'chemical-free', 'chemical-fertilizers-free'],
    imageUrl: './images/maja-vujic-carrot.jpg',
    orientation: 'left',
  },
  {
    title: 'Fresh',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus debitis nostrum odit, totam delectus corporis? Impedit repudiandae dolorum architecto?',
    bullets: [
      'harvest before delivery',
      'placed in wooden basket',
      'delivered immediately',
    ],
    imageUrl: './images/hans-ripa-broccoli.jpg',
    orientation: 'right',
  },
  {
    title: 'Delivery',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus debitis nostrum odit, totam delectus corporis? Impedit repudiandae dolorum architecto?',
    bullets: ['range of 20km', 'no extra charge', 'lighting fast'],
    imageUrl: './images/annie-spratt-delivery.jpg',
    orientation: 'left',
  },
];

const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-24">
      <header className="max-w-[600px] text-center">
        <Heading level={1}>
          Get Fresh Vegetables From Ground Delivered to Your Table
        </Heading>
        <Paragraph size="small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          doloribus debitis nostrum odit, totam delectus corporis? Impedit
          repudiandae dolorum architecto?
        </Paragraph>
      </header>

      <section>
        {configTextImageBlocks.map((block) => (
          <TextImageBlock key={block.title} data={block} />
        ))}
      </section>

      <section className="bg-emerald-600 w-full pt-24 flex flex-col items-center">
        <header className="text-center w-[600px]">
          <Heading level={2} color="secondary">
            We Will Deliver Only The Best Vegetables
          </Heading>
          <h3 className="text-emerald-200 text-md">
            Rest of the grown vegetables go to our animal farm friends as food
            for live stock
          </h3>
        </header>
        <main className="flex gap-12 pt-24">
          <div className="w-[175px] h-[200px] rounded-tr-full rounded-tl-full bg-emerald-50 flex flex-col items-center justify-center gap-2 text-center">
            <GiPathDistance size={50} className="text-emerald-600" />
            <h3 className="font-bold text-emerald-600">Local</h3>
            <p className="text-xs text-neutral-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              ipsum!
            </p>
          </div>
          <div className="w-[175px] h-[200px] rounded-tr-full rounded-tl-full bg-emerald-50 flex flex-col items-center justify-center gap-2 text-center">
            <GiBootPrints size={50} className="text-emerald-600" />
            <h3 className="font-bold text-emerald-600">Low Carbon Footprint</h3>
            <p className="text-xs text-neutral-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              ipsum!
            </p>
          </div>
          <div className="w-[175px] h-[200px] rounded-tr-full rounded-tl-full bg-emerald-50 flex flex-col items-center justify-center gap-2 text-center">
            <GiBeech size={50} className="text-emerald-600" />
            <h3 className="font-bold text-emerald-600">No Waste</h3>
            <p className="text-xs text-neutral-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              ipsum!
            </p>
          </div>
        </main>
      </section>

      <section className="w-[600px] h-[300px]">
        <Slider
          slides={testimonialData.map((t) => (
            <Testimonial
              key={t.id}
              imageUrl={t.imageUrl}
              text={t.text}
              userName={t.name}
            />
          ))}
        />
      </section>
    </div>
  );
};

export default HomePage;
