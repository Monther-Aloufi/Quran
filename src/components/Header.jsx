import React from 'react';

import alquranulKarim from '../public/images/alquranul-karim.svg';

import SearchBar from './SearchBar';
import LinkButton from '../util/LinkButton';
import '../styles/tailwind.css';

const Header = () => {
  return (
    <div className="bg-[url(../public/images/background.jpg)] bg-cover bg-center bg-no-repeat h-96 flex  justify-center">
      <div className="flex pt-6 flex-col gap-5 items-center">
        <img
          src={alquranulKarim}
          alt="alquranul-kareem"
          className="w-[250px]"
        />
        <SearchBar />
        <div className="flex gap-2">
          <LinkButton />
          <LinkButton />
          <LinkButton />
          <LinkButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
