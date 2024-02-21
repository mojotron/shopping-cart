import { ReactNode } from 'react';
import { ColorType, ColorEnum } from '../../types/cssHelperTypes';

type LevelType = 1 | 2 | 3 | 4 | 5 | 6;

type PropsType = {
  level?: LevelType;
  color?: ColorType;
  children: ReactNode;
};

const generalStyle = 'font-bold font-righteous';

const getTextSize = (level: number) => {
  switch (level) {
    case 1:
      return '5xl';
    case 2:
      return '4xl';
    case 3:
      return '3xl';
    case 4:
      return '2xl';
    case 5:
      return 'lg';
    case 6:
      return 'md';
    default:
      return 'sm';
  }
};

const Heading = ({ level = 1, children, color = 'primary' }: PropsType) => {
  const style = `${generalStyle} text-${getTextSize(level)} ${ColorEnum[color]}`;

  switch (level) {
    case 1:
      return <h1 className={style}>{children}</h1>;
    case 2:
      return <h2 className={style}>{children}</h2>;
    case 3:
      return <h3 className={style}>{children}</h3>;
    case 4:
      return <h4 className={style}>{children}</h4>;
    case 5:
      return <h5 className={style}>{children}</h5>;
    case 6:
      return <h6 className={style}>{children}</h6>;
    default: {
      throw new Error('Invalid Heading Level!');
    }
  }
};

export default Heading;
