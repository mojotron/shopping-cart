import { Link } from 'react-router-dom';
import { GiBroccoli as IconLogo } from 'react-icons/gi';
import Heading from '../../ui/Heading/Heading';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2" title="VEGE-to-TABLE">
      <div className="border border-green-600 p-2 rounded-full">
        <IconLogo size={35} className="text-green-600" />
      </div>
      <div className="invisible sm:visible">
        <Heading level={4}>VEGE(to)TABLES</Heading>
        <p className="text-sm font-bold text-gray-400">
          Organic, Fresh, Healthy
        </p>
      </div>
    </Link>
  );
};

export default Logo;
