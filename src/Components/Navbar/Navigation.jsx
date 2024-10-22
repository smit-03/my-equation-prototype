import React from 'react';

export const Navigation = () => {
  return (
    <div className="sm:block hidden sm:w-1/3 w-1/2 place-content-center">
      {/* navigations */}
      <ul className="w-full flex justify-around">
        <li className="font-medium">
          <a className="text-black font-bold hover:text-primary-default" href="/#">
            Home
          </a>
        </li>
        <li className="font-medium">
          <a className="text-black font-bold hover:text-primary-default" href="/#courses">
            Courses
          </a>
        </li>
        <li className="font-medium">
          <a className="text-black font-bold hover:text-primary-default" href="/#about">
            About Us
          </a>
        </li>
      </ul>
    </div>
  );
};
