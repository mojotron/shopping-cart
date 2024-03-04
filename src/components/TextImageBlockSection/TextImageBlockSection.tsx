import type { TextImageBlockType } from '../../types/textImageBlockType';
import TextImageBlock from '../TextImageBlock/TextImageBlock';

const TextImageBlockSection = ({ items }: { items: TextImageBlockType[] }) => {
  return (
    <ul className="space-y-8">
      {items.map((block) => (
        <TextImageBlock key={block.title} data={block} />
      ))}
    </ul>
  );
};

export default TextImageBlockSection;
