import React from 'react';

const Seporator = ({className = ''}) => {
  return (
    <span
      className={`${className}
        block
        bg-yellow
        h-1
        w-24
        mb-4
    `}
    />
  );
};

export default Seporator;
