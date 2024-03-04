const LabelList = ({ labels }: { labels: string[] }) => {
  return (
    <ul className="flex flex-wrap gap-1">
      {labels.map((label) => (
        <li
          className="bg-orange-200 px-2 text-sm rounded-md text-gray-800"
          key={label}
        >
          &#10003; {label}
        </li>
      ))}
    </ul>
  );
};

export default LabelList;
