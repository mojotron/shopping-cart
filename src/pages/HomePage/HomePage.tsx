import { GiPathDistance, GiBeech, GiBootPrints } from 'react-icons/gi';
import Slider from '../../ui/Slider/Slider';
import testimonialData from '../../data/testimonials.json';
import Testimonial from '../../components/Testimonial/Testimonial';
import CheckLabel from '../../ui/CheckLabel/CheckLabel';
import Heading from '../../ui/Heading/Heading';

const TextSide = ({
  title,
  text,
  bullets,
}: {
  title: string;
  text: string;
  bullets: string[];
}) => {
  return (
    <div className="w-[50%] flex flex-col gap-2 ">
      <h2 className="text-2xl font-bold text-emerald-600">{title}</h2>
      <p className="text-sm text-neutral-600">{text}</p>
      <ul className="flex flex-col gap-2">
        {bullets.map((item) => (
          <CheckLabel key={item} label={item} />
        ))}
      </ul>
    </div>
  );
};

const ImageSide = ({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl: string;
}) => {
  return (
    <div className="w-[50%] min-h-full flex items-center justify-center">
      <div className="w-[200px] h-[200px] bg-neutral-300 rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={title}
        />
      </div>
    </div>
  );
};

const TextAndImage = ({
  title,
  text,
  bullets,
  imageUrl,
  orientation = 'left',
}: {
  title: string;
  text: string;
  bullets: string[];
  imageUrl: string;
  orientation: 'left' | 'right';
}) => {
  return (
    <section className="w-[600px] min-h-[100px] flex gap-1 py-8">
      {orientation === 'left' ? (
        <>
          <TextSide title={title} text={text} bullets={bullets} />
          <ImageSide imageUrl={imageUrl} title={title} />
        </>
      ) : (
        <>
          <ImageSide imageUrl={imageUrl} title={title} />
          <TextSide title={title} text={text} bullets={bullets} />
        </>
      )}
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-24">
      <header className="max-w-[600px] text-center">
        <Heading level={1}>
          Get Fresh Vegetables From Ground Delivered to Your Table
        </Heading>
        <p className="text-sm text-neutral-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          doloribus debitis nostrum odit, totam delectus corporis? Impedit
          repudiandae dolorum architecto?
        </p>
      </header>
      <section>
        <TextAndImage
          title="Organic"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          doloribus debitis nostrum odit, totam delectus corporis? Impedit
          repudiandae dolorum architecto?"
          bullets={[
            'pesticide-free',
            'chemical-free',
            'chemical-fertilizers-free',
          ]}
          imageUrl="./images/maja-vujic-carrot.jpg"
          orientation="left"
        />
        <TextAndImage
          title="Fresh"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          doloribus debitis nostrum odit, totam delectus corporis? Impedit
          repudiandae dolorum architecto?"
          bullets={[
            'harvest before delivery',
            'placed in wooden basket',
            'delivered immediately',
          ]}
          imageUrl="./images/hans-ripa-broccoli.jpg"
          orientation="right"
        />
        <TextAndImage
          title="Delivery"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          doloribus debitis nostrum odit, totam delectus corporis? Impedit
          repudiandae dolorum architecto?"
          bullets={['range of 20km', 'no extra charge', 'lighting fast']}
          imageUrl="./images/eric-prouzet-potato.jpg"
          orientation="left"
        />
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
