/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import {
  FaCcVisa as IconVisa,
  FaCcMastercard as IconMasterCard,
  FaCcDinersClub as IconDinersClub,
} from 'react-icons/fa6';
import { SiAmericanexpress as IconAmex } from 'react-icons/si';

enum CardOptionEnum {
  visa = 'visa',
  master = 'mastercard',
  amex = 'american express',
  diners = 'diners club',
}

export type CardOptionType = keyof typeof CardOptionEnum;

const ICON_SIZE = 20;

const paymentOption = [
  { name: CardOptionEnum.visa, icon: <IconVisa size={ICON_SIZE} /> },
  { name: CardOptionEnum.master, icon: <IconMasterCard size={ICON_SIZE} /> },
  { name: CardOptionEnum.amex, icon: <IconAmex size={ICON_SIZE} /> },
  { name: CardOptionEnum.diners, icon: <IconDinersClub size={ICON_SIZE} /> },
];

type PropsType = {
  selectedCard: CardOptionType;
  onSelect: (card: CardOptionType) => void;
};

const CardSelect = ({ selectedCard, onSelect }: PropsType) => {
  const [openOptions, setOpenOptions] = useState(false);
  const current = paymentOption.find((option) => option.name === selectedCard);

  return (
    <div className="w-[200px]">
      <div
        onClick={() => setOpenOptions((oldValue) => !oldValue)}
        className="cursor-pointer w-full flex gap-2 justify-center items-center border border-emerald-400 px-4 py-1 rounded-md text-emerald-600 font-bold placeholder:text-neutral-400 outline-none focus:ring focus:ring-emerald-200 focus:ring-offset-0"
      >
        {current?.name} {current?.icon}
      </div>
      {openOptions && (
        <ul className="bg-emerald-100">
          {paymentOption.map((opt) => (
            <li
              onClick={() => {
                onSelect(opt.name as CardOptionType);
                setOpenOptions(false);
              }}
              key={opt.name}
              className="cursor-pointer text-neutral-800 w-full flex gap-2  items-center px-4 py-1 hover:bg-emerald-200"
            >
              {opt.name} {opt.icon}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CardSelect;
