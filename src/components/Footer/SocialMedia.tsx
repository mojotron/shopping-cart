import {
  FaInstagram as IconIns,
  FaFacebook as IconFb,
  FaXTwitter as IconX,
} from 'react-icons/fa6';
import Heading from '../../ui/Heading/Heading';

const socialMediaConfig = [
  { label: 'instagram', icon: <IconIns size={22} /> },
  { label: 'facebook', icon: <IconFb size={22} /> },
  { label: 'x', icon: <IconX size={22} /> },
];

const SocialMedia = () => {
  return (
    <div className="space-y-2">
      <Heading level={5}>Follow us</Heading>
      <ul className="flex gap-3">
        {socialMediaConfig.map((media) => (
          <li className="cursor-pointer" key={media.label}>
            <span className="text-green-600 hover:text-orange-400">
              {media.icon}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
