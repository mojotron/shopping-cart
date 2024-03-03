import ImageSide from './ImageSide';
import TextSide from './TextSide';

import type { TextImageBlockType } from '../../types/textImageBlockType';

type PropsType = {
  data: TextImageBlockType;
};

const TextImageBlock = ({ data }: PropsType) => {
  return (
    <section className="flex flex-col items-center sm:flex-row gap-5 p-8 w-full max-w-[500px] bg-green-100 rounded-md">
      {data.orientation === 'left' ? (
        <>
          <TextSide
            title={data.title}
            text={data.text}
            bullets={data.bullets}
          />
          <ImageSide imageUrl={data.imageUrl} title={data.title} />
        </>
      ) : (
        <>
          <ImageSide imageUrl={data.imageUrl} title={data.title} />
          <TextSide
            title={data.title}
            text={data.text}
            bullets={data.bullets}
          />
        </>
      )}
    </section>
  );
};

export default TextImageBlock;
