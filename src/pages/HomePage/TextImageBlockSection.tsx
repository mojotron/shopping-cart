import { TextImageBlockType } from '../../types/textImageBlockType';
import TextImageBlock from '../../components/TextImageBlock/TextImageBlock';

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

const TextImageBlockSection = () => {
  return (
    <ul className="space-y-8">
      {configTextImageBlocks.map((block) => (
        <TextImageBlock key={block.title} data={block} />
      ))}
    </ul>
  );
};

export default TextImageBlockSection;
