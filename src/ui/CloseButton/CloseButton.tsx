type PropsType = {
  onClick: () => void;
};

const CloseButton = ({ onClick }: PropsType) => {
  return (
    <button
      className="absolute top-0 right-5 text-3xl font-bold text-gray-800 hover:text-orange-600"
      onClick={onClick}
      type="button"
    >
      &times;
    </button>
  );
};

export default CloseButton;
