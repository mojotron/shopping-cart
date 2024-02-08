import { NavLink } from 'react-router-dom';

const navConfig = [
  { path: '/', display: 'Home' },
  { path: 'about', display: 'About' },
  { path: 'store', display: 'Store' },
  { path: 'contact', display: 'Contact' },
];

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-3">
        {navConfig.map((ele) => (
          <li key={ele.path}>
            <NavLink to={ele.path} className="aria-[current=page]:text-red-400">
              {ele.display}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
