import { TextIconBlockType } from '../../types/textIconBlockType';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';
import CheckLabel from '../../ui/CheckLabel/CheckLabel';

type PropsType = {
  data: TextIconBlockType;
};

const TextIconBlock = ({ data }: PropsType) => {
  return (
    <div className="w-full p-8 flex flex-col items-start gap-5 bg-green-600 rounded-md ">
      <Heading level={3} color="secondary">
        {data.title}
      </Heading>
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <div className="border border-green-600 rounded-full p-4 text-orange-400 bg-gray-50">
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
