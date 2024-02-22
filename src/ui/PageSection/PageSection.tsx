import { ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
};

const PageSection = ({ children }: PropsType) => {
  return (
    <section className="flex flex-col gap-8 items-center max-w-[600px]">
      {children}
    </section>
  );
};

export default PageSection;
