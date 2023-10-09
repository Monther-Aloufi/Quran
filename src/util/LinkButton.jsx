import React from 'react';

import '../styles/tailwind.css';

const LinkButton = props => {
  return (
    <a
      href="/"
      className="bg-white px-2.5 py-1 rounded-full hover:bg-primary hover:shadow-md  "
    >
      {props.name || 'Button'}
    </a>
  );
};

export default LinkButton;
