import React, { useState } from 'react';
import { BsCloudUpload } from 'react-icons/bs';
import { Icon } from 'components/Icon/Icon';
import { profileSettings } from 'helpers/profileSettings';
import { ModalLogout } from 'components/ModalLogout/ModalLogout';
import { AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import profileOperations from 'redux/profile/profile-operations';

const MyProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleToggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const handleSubmitImage = e => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('avatarUrl', file);
    dispatch(profileOperations.updateAvatar(formData));
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
        {/* <img
          style={{ borderRadius: '50%' }}
          className="w-16 h-16"
          src="https://i.pinimg.com/236x/4b/da/b5/4bdab596617446d1e7b9fdcb3e8d71f2.jpg"
          alt="avatar"
        /> */}
        <div
          className="w-16 h-16 bg-slate-300 relative grid place-content-center"
          style={{ borderRadius: '50%' }}
        >
          <BsCloudUpload />
          <label className="absolute w-full h-full cursor-pointer">
            <input
              className="w-0 h-0 opacity-0 overflow-hidden"
              onChange={handleSubmitImage}
              type="file"
              name="avatarUrl"
            />
          </label>
        </div>

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
