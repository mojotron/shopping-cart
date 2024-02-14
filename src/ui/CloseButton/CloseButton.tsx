type PropsType = {
  onClick: () => void;
};

export const CloseButton = ({ onClick }: PropsType) => {
  return (
    <button
      className="absolute top-5 right-5 text-3xl font-bold text-emerald-100 hover:text-red-200"
      onClick={onClick}
      type="button"
    >
      &times;
    </button>
  );
};
