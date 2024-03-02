import { Link } from 'react-router-dom';
import { GiBroccoli as IconLogo } from 'react-icons/gi';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="border border-green-600 p-2 rounded-full">
        <IconLogo size={35} className="text-green-600" />
      </div>
      <div className="">
        <h1 className="font-bold font-righteous text-green-600 text-sm sm:text-lg md:text-xl">
          VEGE(to)TABLES
        </h1>
        <p className="font-bold text-gray-400 text-xs sm:text-sm md:text-md">
          Organic, Fresh, Healthy
        </p>
      </div>
    </Link>
  );
};

export default Logo;
