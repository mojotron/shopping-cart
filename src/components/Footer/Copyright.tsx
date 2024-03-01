import React from 'react';

const Copyright = () => {
  return (
    <p className="absolute bottom-5 font-bold space-x-2 text-gray-600">
      <a
        className="hover:text-orange-400"
        href="https://github.com/mojotron/shopping-cart"
        target="_blank"
        rel="noreferrer noopener"
      >
        @Mojotron
      </a>
      <span>{new Date().getFullYear()}</span>
    </p>
  );
};

export default Copyright;
