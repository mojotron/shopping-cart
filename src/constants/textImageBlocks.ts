import { TextImageBlockType } from '../types/textImageBlockType';

const dummyText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus debitis nostrum odit, totam delectus corporis? Impedit repudiandae dolorum architecto?';

export const TEXT_IMAGE_BLOCKS_HOMEPAGE: TextImageBlockType[] = [
  {
    title: 'Organic',
    text: dummyText,
    bullets: ['pesticide-free', 'chemical-free', 'chemical-fertilizers-free'],
    imageUrl: './images/maja-vujic-carrot.jpg',
    orientation: 'left',
  },
  {
    title: 'Fresh',
    text: dummyText,
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
    text: dummyText,
    bullets: ['range of 20km', 'no extra charge', 'lighting fast'],
    imageUrl: './images/annie-spratt-delivery.jpg',
    orientation: 'left',
  },
];

export const TEXT_IMAGE_BLOCKS_ABOUTPAGE: TextImageBlockType[] = [
  {
    title: 'Gardening',
    text: dummyText,
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
    text: dummyText,
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
    text: dummyText,
    bullets: [
      'react with typescript',
      'express and mongo db',
      'love to learn new tech',
    ],
    imageUrl: './images/clement-helardot-web-dev.jpg',
    orientation: 'left',
  },
];
