import CheckLabel from '../../ui/CheckLabel/CheckLabel';
import Heading from '../../ui/Heading/Heading';

type PropsType = {
  title: string;
  text: string;
  bullets: string[];
};

const TextSide = ({ title, text, bullets }: PropsType) => {
  return (
    <div className="w-[50%] flex flex-col gap-4 text-left">
      <Heading level={3}>{title}</Heading>
      <p className="text-sm text-neutral-600">{text}</p>
      <ul className="flex flex-col gap-2">
        {bullets.map((item) => (
          <CheckLabel key={item} label={item} />
        ))}
      </ul>
    </div>
  );
};

export default TextSide;
