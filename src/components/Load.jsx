import React from 'react';

// LOADER
import { Oval } from 'react-loader-spinner';

const Load = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Load;
