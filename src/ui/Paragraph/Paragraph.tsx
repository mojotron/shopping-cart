import { ReactNode } from 'react';
import {
  ParagraphColorType,
  ParagraphColorEnum,
  ParagraphSizeType,
  ParagraphSizeEnum,
} from '../../types/cssHelperTypes';

type PropsType = {
  color?: ParagraphColorType;
  size?: ParagraphSizeType;
  children: ReactNode;
};

const Paragraph = ({
  color = 'primary',
  size = 'medium',
  children,
}: PropsType) => {
  return (
    <p
      className={`${ParagraphColorEnum[color]} ${ParagraphSizeEnum[size]} text-justify`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
