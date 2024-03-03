import {
  GiPathDistance as IconPath,
  GiBeech as IconTree,
  GiBootPrints as IconFootPrint,
} from 'react-icons/gi';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';

const ICON_SIZE = 50;

const infoGraphicConfig = [
  {
    label: 'Local',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,ipsum!',
    icon: <IconPath size={ICON_SIZE} />,
  },
  {
    label: 'Low Carbon Footprint',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,ipsum!',
    icon: <IconTree size={ICON_SIZE} />,
  },
  {
    label: 'No Waste',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,ipsum!',
    icon: <IconFootPrint size={ICON_SIZE} />,
  },
];

const InfoSection = () => {
  return (
    <section className="bg-green-600 w-full pt-24 flex flex-col items-center">
      <header className="text-center px-20 space-y-4">
        <Heading level={2} color="secondary">
          We Will Deliver Only The Best Vegetables
        </Heading>
        <Paragraph size="medium" color="secondary">
          Rest of the grown vegetables go to our animal farm friends as food for
          live stock
        </Paragraph>
      </header>
      <ul className="pt-24 flex gap-1 sm:gap-6 md:gap-12">
        {infoGraphicConfig.map((item) => (
          <li
            key={item.label}
            className="bg-gray-50 rounded-tr-full rounded-tl-full flex flex-col gap-2 items-center py-8 px-6 text-center w-26 sm:w-40 lg:w-48"
          >
            <span className="text-green-600">{item.icon}</span>
            <Heading level={5}>{item.label}</Heading>
            <Paragraph size="small">{item.text}</Paragraph>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InfoSection;
