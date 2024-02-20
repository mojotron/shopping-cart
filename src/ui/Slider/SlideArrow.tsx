import {
  AiOutlineDoubleLeft as IconLeft,
  AiOutlineDoubleRight as IconRight,
} from 'react-icons/ai';

type PropsType = {
  orientation: 'left' | 'right';
  onClick: () => void;
};

const SlideArrow = ({ orientation, onClick }: PropsType) => {
  return (
    <button
      className={`absolute ${orientation}-0 bottom-10 text-neutral-400 hover:text-emerald-600`}
      type="button"
      onClick={onClick}
    >
      {orientation === 'left' ? (
        <IconLeft size={30} />
      ) : (
        <IconRight size={30} />
      )}
    </button>
  );
};

export default SlideArrow;
