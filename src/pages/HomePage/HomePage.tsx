import Slider from '../../ui/Slider/Slider';
import testimonialData from '../../data/testimonials.json';
import Testimonial from '../../components/Testimonial/Testimonial';

import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';

import InfoSection from './InfoSection';
import TextImageBlockSection from '../../components/TextImageBlockSection/TextImageBlockSection';
import { TEXT_IMAGE_BLOCKS_HOMEPAGE } from '../../constants/textImageBlocks';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-8 pt-16">
      <header className="px-16 text-center space-y-4">
        <Heading level={1}>
          Get Fresh Vegetables From Ground Delivered to Your Table
        </Heading>
        <Paragraph size="small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          doloribus debitis nostrum odit, totam delectus corporis? Impedit
          repudiandae dolorum architecto?
        </Paragraph>
      </header>

      <TextImageBlockSection items={TEXT_IMAGE_BLOCKS_HOMEPAGE} />

      <InfoSection />

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
    </div>
  );
};

export default HomePage;
