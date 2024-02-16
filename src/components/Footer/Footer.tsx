import {
  FaInstagram as IconIns,
  FaFacebook as IconFb,
  FaXTwitter as IconX,
  FaPhone as IconPhone,
  FaClock as IconClock,
  FaLocationDot as IconLocation,
} from 'react-icons/fa6';
import { IoMail as IconMail } from 'react-icons/io5';

import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <footer className="mt-16 relative w-full border-t border-emerald-300 bg-neutral-200 pt-12 pb-24 px-8 flex sm:flex-col lg:flex-row gap-5 text-neutral-900">
      <section className="lg:w-[250px] flex flex-col gap-5 text-sm sm:w-full">
        <Logo />
        <p className="">
          Eat healthy form local, organic source. Order and we will deliver in
          one hour.
        </p>
        <div>
          <h3 className="font-bold mb-3">Follow us</h3>
          <div className="flex gap-3">
            <IconIns size={22} className="text-emerald-600" />
            <IconFb size={22} className="text-emerald-600" />
            <IconX size={22} className="text-emerald-600" />
          </div>
        </div>
      </section>

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
        <div className="flex flex-col gap-2">
          <h3 className="font-bold mb-2">Contacts</h3>
          <p className="flex gap-2 items-center">
            <IconLocation size={15} className="text-emerald-600" /> Pumpkin
            Hill, Happyvile WD
          </p>
          <p className="flex gap-2 items-center">
            <IconPhone size={15} className="text-emerald-600" /> 00010 2000 3456
          </p>
          <p className="flex gap-2 items-center">
            <IconMail size={15} className="text-emerald-600" />
            vage-to-table@example.com
          </p>
          <p className="flex gap-2 items-center">
            <IconClock size={15} className="text-emerald-600" />
            Mon-Sat (08:00 - 18:00)
          </p>
        </div>
      </section>
      <p className="absolute bottom-5 font-bold">
        &copy; {new Date().getFullYear()} Mojotron{' '}
      </p>
    </footer>
  );
};

export default Footer;
