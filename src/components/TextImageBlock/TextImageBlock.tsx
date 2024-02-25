import ImageSide from './ImageSide';
import TextSide from './TextSide';

import type { TextImageBlockType } from '../../types/textImageBlockType';

type PropsType = {
  data: TextImageBlockType;
};

const TextImageBlock = ({ data }: PropsType) => {
  return (
    <section className="w-[600px] min-h-[100px] flex gap-1 py-8">
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
