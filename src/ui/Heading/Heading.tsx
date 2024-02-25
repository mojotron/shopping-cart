import { ReactNode } from 'react';
import { HeadingColorType, HeadingColorEnum } from '../../types/cssHelperTypes';

type LevelType = 1 | 2 | 3 | 4 | 5 | 6;

type PropsType = {
  level?: LevelType;
  color?: HeadingColorType;
  children: ReactNode;
};

const generalStyle = 'font-bold font-righteous capitalize';

const getTextSize = (level: number) => {
  switch (level) {
    case 1:
      return 'text-5xl';
    case 2:
      return 'text-4xl';
    case 3:
      return 'text-3xl';
    case 4:
      return 'text-2xl';
    case 5:
      return 'text-lg';
    case 6:
      return 'text-md';
    default:
      return 'text-sm';
  }
};

const Heading = ({ level = 1, children, color = 'primary' }: PropsType) => {
  const style = `${generalStyle} ${getTextSize(level)} ${HeadingColorEnum[color]}`;

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
