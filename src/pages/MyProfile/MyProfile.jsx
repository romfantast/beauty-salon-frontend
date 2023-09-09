import React, { useState } from 'react';

import { Icon } from 'components/Icon/Icon';
import { profileSettings } from 'helpers/profileSettings';
import { ModalLogout } from 'components/ModalLogout/ModalLogout';
import { AnimatePresence } from 'framer-motion';
import Avatar from 'components/Profile/Avatar/Avatar';

const MyProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <section>
      <div
        style={{
          boxShadow:
            '0px 0.5px 2px 0px rgba(96, 97, 112, 0.16), 0px 0px 1px 0px rgba(40, 41, 61, 0.08)',
        }}
        className="flex gap-x-2 items-center px-6 pt-6 pb-5"
      >
        <Avatar />
        <div className="grow">
          <div className="w-full flex justify-between items-center">
            <p className="text-lg font-bold">Anna Doe</p>
            <button className="text-indigo-500">Edit</button>
          </div>
          <div className="flex items-center  gap-x-1 text-slate-500 text-xs">
            <p>+1 - 4842989351</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <circle cx="2.22925" cy="2.84033" r="2" fill="#F2F2F5" />
            </svg>
            <p>johndoe@gmail.com</p>
          </div>
        </div>
      </div>
      <div>
        <div className="p-6">
          <ul className="grid gap-y-8">
            {profileSettings.map(item => (
              <li
                key={item.icon}
                onClick={() =>
                  item.function === 'logout'
                    ? setIsOpen(prevOpen => !prevOpen)
                    : false
                }
              >
                <div className="flex items-center gap-x-4">
                  <Icon
                    width="24"
                    height="24"
                    id={item.icon}
                    fill="transparent"
                    stroke="black"
                  />
                  <div>
                    <p
                      className={`leading-4 text-sm font-bold ${
                        item.option === 'accent'
                          ? 'text-red-500 cursor-pointer'
                          : ''
                      }`}
                    >
                      {item.text}
                    </p>
                    <p className="leading-4 text-xs text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isOpen && (
        <AnimatePresence>
          <ModalLogout onToggleModal={handleToggleModal} />
        </AnimatePresence>
      )}
    </section>
  );
};

export default MyProfile;
