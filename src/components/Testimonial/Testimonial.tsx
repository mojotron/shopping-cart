import {
  BiSolidQuoteAltLeft as IconQuoteLeft,
  BiSolidQuoteAltRight as IconQuoteRight,
} from 'react-icons/bi';

type PropsType = {
  imageUrl: string;
  text: string;
  userName: string;
};

const Testimonial = ({ imageUrl, text, userName }: PropsType) => {
  return (
    <article>
      <div className="flex gap-2 rounded-md">
        <p className="flex flex-col text-lg text-neutral-600">
          <IconQuoteLeft className="font-bold text-3xl" />
          {text}
          <IconQuoteRight className="font-bold text-3xl ml-auto" />
        </p>
        <img
          className="rounded-full object-cover w-24 h-24"
          src={imageUrl}
          alt={userName}
        />
      </div>
      <h2 className="font-bold font-lg text-emerald-600">{userName}</h2>
    </article>
  );
};

export default Testimonial;
