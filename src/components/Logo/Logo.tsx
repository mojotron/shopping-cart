import { GiTreeBranch as IconBranch } from 'react-icons/gi';

const Logo = () => {
  return (
    <div className="flex items-center gap-5 text-white">
      <IconBranch size={35} color="white" />
      <div>
        <h1 className="text-lg">Mighty Branch</h1>
        <h2 className="text-sm">Premium Arrows</h2>
      </div>
    </div>
  );
};

export default Logo;
