import Logo from '../Logo/Logo';
import Contacts from './Contacts';
import Copyright from './Copyright';
import LinksBlock from './LinksBlock';
import SocialMedia from './SocialMedia';
import {
  COMPANY_LINKS_CONFIG,
  JOIN_LINKS_CONFIG,
} from '../../constants/footerLinks';

const Footer = () => {
  return (
    <footer className="relative mt-16 flex flex-col lg:flex-row items-center gap-12 bg-gray-200 p-16 pb-24">
      <section className="flex flex-col gap-2">
        <Logo />
        <p className="">
          Eat healthy form local, organic source. Order and we will deliver in
          one hour.
        </p>

        <SocialMedia />
      </section>

      <section className="flex flex-col gap-6 sm:flex-row">
        <LinksBlock label="Company" links={COMPANY_LINKS_CONFIG} />

        <LinksBlock label="Join Our Team" links={JOIN_LINKS_CONFIG} />

        <Contacts />
      </section>
      <Copyright />
    </footer>
  );
};

export default Footer;
