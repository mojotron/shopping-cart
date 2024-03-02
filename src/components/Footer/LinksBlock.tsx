import Heading from '../../ui/Heading/Heading';

type LinkType = {
  label: string;
  path: string;
};

type PropsType = {
  label: string;
  links: LinkType[];
};

const LinksBlock = ({ label, links }: PropsType) => {
  return (
    <div>
      <Heading level={5}>{label}</Heading>
      <ul className="space-y-2">
        {links.map((link) => (
          <li
            className="cursor-pointer hover:text-green-600 text-sm text-gray-800"
            key={link.label}
          >
            <a href={link.path}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksBlock;
