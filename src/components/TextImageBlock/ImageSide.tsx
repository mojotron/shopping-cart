type PropsType = {
  title: string;
  imageUrl: string;
};

const ImageSide = ({ title, imageUrl }: PropsType) => {
  return (
    <div className="w-[50%] min-h-full flex items-center justify-center">
      <div className="w-[200px] h-[200px] bg-neutral-300 rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={title}
        />
      </div>
    </div>
  );
};

export default ImageSide;
