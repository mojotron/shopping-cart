import Heading from '../../../ui/Heading/Heading';
import Paragraph from '../../../ui/Paragraph/Paragraph';
import TextIconBlock from '../../../components/TextIconBlock/TextIconBlock';
import { VISION_BLOCK_ABOUTPAGE } from '../../../constants/visionBlocks';

const VisionSection = () => {
  return (
    <section className="text-center px-8 space-y-8">
      <Heading level={2}>What is Our Vision</Heading>
      <Paragraph size="small">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quos
        asperiores quas ipsum in eum tempora debitis dolorem quasi sed laborum,
        perferendis corporis reiciendis doloribus. Eum accusantium autem aliquid
        architecto.
      </Paragraph>
      <div className="flex flex-col gap-8 items-center">
        {VISION_BLOCK_ABOUTPAGE.map((vision) => (
          <TextIconBlock key={vision.title} data={vision} />
        ))}
      </div>
    </section>
  );
};

export default VisionSection;
