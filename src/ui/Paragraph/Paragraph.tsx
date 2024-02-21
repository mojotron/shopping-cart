import { ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
};

const Paragraph = ({ children }: PropsType) => {
  return <p>{children}</p>;
};

export default Paragraph;
