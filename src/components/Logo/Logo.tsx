import { GiBroccoli as IconLogo } from 'react-icons/gi';

const Logo = () => {
  return (
    <div className="flex items-center gap-2 text-white">
      <div className="border border-emerald-600 p-2 rounded-full">
        <IconLogo size={35} className="text-emerald-600" />
      </div>
      <div>
        <h2 className="text-lg font-bold text-emerald-600 font-righteous ">
          VEGE(to)TABLES
        </h2>
      </div>
    </div>
  );
};

export default Logo;
