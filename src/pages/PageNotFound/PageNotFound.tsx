import { Link } from 'react-router-dom';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-32 space-y-8">
      <Heading level={2}>404 Page Not Found</Heading>
      <Paragraph>Resource yo are looking for do not exist </Paragraph>
      <Link className="underline font-bold text-green-600" to="/">
        return to home page
      </Link>
    </div>
  );
};

export default PageNotFound;
