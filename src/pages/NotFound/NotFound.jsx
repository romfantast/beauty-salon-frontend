import Header from 'components/Header/Header';
import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <Header />
      <div className="lg:px-24 lg:py-2 md:py-2 md:px-44 px-4 py-2 pb-16 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                  Looks like you've found the doorway to the great nothing
                </h1>
                <p className="my-2 text-gray-800">
                  Sorry about that! Please visit our hompage to get where you
                  need to go.
                </p>
                <button className="sm:w-full lg:w-auto my-2 border rounded mt-3 py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                  <Link to="/"> Take me there!</Link>
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://i.ibb.co/G9DC8S0/404-2.png"
                alt="404-notfound"
              />
            </div>
          </div>
        </div>
        <div classNameName="max-w-xs">
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt="ui-notfound" />
        </div>
      </div>
    </>
  );
};
