import Heading from '../../../ui/Heading/Heading';
import Paragraph from '../../../ui/Paragraph/Paragraph';
import TextImageBlockSection from '../../../components/TextImageBlockSection/TextImageBlockSection';
import { TEXT_IMAGE_BLOCKS_ABOUTPAGE } from '../../../constants/textImageBlocks';
import Button from '../../../ui/Button/Button';

const CareerSection = () => {
  return (
    <div className="flex flex-col gap-8 items-center">
      <header className="space-y-8">
        <Heading level={2}>We always need new hands on deck</Heading>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quos
          similique omnis eius rerum. Quos architecto neque vel sequi voluptatum
          voluptatibus possimus aspernatur voluptas deleniti, sunt magni facilis
          nemo magnam.
        </Paragraph>
      </header>
      <Heading level={3}>Career Options</Heading>
      <TextImageBlockSection items={TEXT_IMAGE_BLOCKS_ABOUTPAGE} />
      <div className="bg-green-600 w-full py-16 space-y-8">
        <Heading level={1} color="secondary">
          Join Our Team
        </Heading>
        <Button onClick={() => {}} type="remove">
          Apply now
        </Button>
      </div>
    </div>
  );
};

export default CareerSection;
