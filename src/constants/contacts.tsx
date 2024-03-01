import {
  FaPhone as IconPhone,
  FaClock as IconClock,
  FaLocationDot as IconLocation,
} from 'react-icons/fa6';
import { IoMail as IconMail } from 'react-icons/io5';

const ICON_SIZE = 20;

export const CONTACT_CONFIG = [
  {
    label: 'address',
    icon: <IconLocation size={ICON_SIZE} />,
    text: 'Pumpkin Hill, Happyvile WD',
  },
  {
    label: 'phone',
    icon: <IconPhone size={ICON_SIZE} />,
    text: '0010 200 3456',
  },
  {
    label: 'email',
    icon: <IconMail size={ICON_SIZE} />,
    text: 'vage-to-table@example.com',
  },
  {
    label: 'working hours',
    icon: <IconClock size={ICON_SIZE} />,
    text: 'Mon-Sat (08:00 - 18:00)',
  },
];
