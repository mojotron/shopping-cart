import Logo from '../Logo/Logo';
import Contacts from './Contacts';
import Copyright from './Copyright';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <footer className="mt-16 relative w-full border-t border-emerald-300 bg-neutral-200 pt-12 pb-24 px-8 flex sm:flex-col lg:flex-row gap-5 text-neutral-900">
      <section className="lg:w-[250px] flex flex-col gap-5 text-sm sm:w-full">
        <Logo />
        <p className="">
          Eat healthy form local, organic source. Order and we will deliver in
          one hour.
        </p>
      </section>

      <SocialMedia />

      <section className="flex gap-6 text-sm">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold mb-2">Company</h3>
          <p>About us</p>
          <p>Delivery Information</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Contact us</p>
          <p>FAQ</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold mb-2">Join our Team</h3>
          <p>Farming</p>
          <p>Food delivery</p>
          <p>Web developers</p>
          <p>Promotions</p>
          <p>Our Gardening Methods</p>
          <p>Our vision</p>
        </div>
        <Contacts />
      </section>
      <Copyright />
    </footer>
  );
};

export default Footer;
