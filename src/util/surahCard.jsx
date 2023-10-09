import React from 'react';

import '../styles/tailwind.css';
import { Link } from 'react-router-dom';

const SurahCard = props => {
  const id = props.id;
  const name_simple = props.name_simple;
  const verses_count = props.verses_count;
  const name_translations = props.name_translations;
  const name_arabic = props.name_arabic;

  return (
    <Link
      to={`/${id}`}
      className="group cursor-pointer flex items-center justify-between border rounded-sm border-gray hover:border-primary p-4 transition-colors duration-200"
    >
      <div className="flex gap-4 items-center">
        <span
          className={`bg-gray-100 ${
            id < 10 ? 'px-4 py-2' : id >= 10 && id <= 99 ? 'py-2 px-3' : 'p-2'
          } group-hover:bg-primary transition-colors duration-200 rounded-sm rotate-45`}
        >
          <p className="rotate-[-45deg] group-hover:text-white transition-colors duration-200">
            {id}
          </p>
        </span>
        <span>
          <p>{name_simple}</p>
          <p className="text-[10px] font-bold text-gray-400 group-hover:text-primary transition-colors duration-200">
            {name_translations}
          </p>
        </span>
      </div>
      <div className="flex flex-col items-center">
        <p>{name_arabic}</p>
        <p className="text-[10px] font-bold text-gray-400 group-hover:text-primary transition-colors duration-200">
          {verses_count} Ayahs
        </p>
      </div>
    </Link>
  );
};

export default SurahCard;
