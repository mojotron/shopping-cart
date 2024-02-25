import { TextIconBlockType } from '../../types/textIconBlockType';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';
import CheckLabel from '../../ui/CheckLabel/CheckLabel';

type PropsType = {
  data: TextIconBlockType;
};

const TextIconBlock = ({ data }: PropsType) => {
  return (
    <div className="w-full p-8 flex flex-col items-start gap-5 bg-emerald-600 rounded-md">
      <Heading level={3} color="secondary">
        {data.title}
      </Heading>
      <div className="flex items-center gap-4">
        <div className="border border-emerald-600 rounded-full p-4 text-emerald-600 bg-emerald-50">
          {data.icon}
        </div>
        <Paragraph size="medium" color="secondary">
          {data.text}
        </Paragraph>
      </div>

      {data.bullets.length > 0 && (
        <ul className="pl-8 flex flex-col gap-1">
          {data.bullets.map((ele) => (
            <CheckLabel key={ele} label={ele} color="secondary" />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TextIconBlock;
