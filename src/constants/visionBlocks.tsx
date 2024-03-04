import {
  GiBullseye as IconTarget,
  GiAbstract079 as IconFlower,
  GiArrowDunk as IconNoWaste,
  GiAsparagus as IconGarden,
} from 'react-icons/gi';
import { VisionBlockType } from '../types/visionBlockType';

export const VISION_BLOCK_ABOUTPAGE: VisionBlockType[] = [
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
