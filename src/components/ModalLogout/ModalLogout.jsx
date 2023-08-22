import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { selectIsAuth, selectIsLoading } from 'redux/auth/auth-selectors';
import { motion } from 'framer-motion';
import { Icon } from 'components/Icon/Icon';
import { ButtonLoader } from 'components/Loader/ButtonLoader';
import { modalLogoutVariants } from 'helpers/animeVariants';

const modalLogout = document.getElementById('modal-logout');

export const ModalLogout = ({ onToggleModal }) => {
  const isAuth = useSelector(selectIsAuth);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onToggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onToggleModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onToggleModal();
    }
  };

  const handleIconCrossClick = () => {
    onToggleModal();
  };

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="fixed z-20 h-screen w-screen top-0 right-0 bottom-0 left-0 bg-slate-950/70 flex justify-center items-end"
    >
      <motion.div
        variants={modalLogoutVariants}
        initial="hidden"
        animate="visible"
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20,
        }}
        className="relative w-full p-6 pb-9 bg-slate-50"
      >
        <button
          onClick={handleIconCrossClick}
          className="absolute top-6 right-6"
        >
          <Icon id="close" width="24" height="24" fill="black" stroke="black" />
        </button>
        <h2 className="text-lg text-slate-950 leading-3 font-bold mb-2">
          Logout?
        </h2>
        <p className="text-base text-slate-500 leading-5 mb-6">
          Are you sure want to logout from the app?
        </p>
        <div className="flex items-center gap-x-2">
          <button
            className="flex justify-center border border-solid border-indigo-500 bg-slate-50  text-indigo-500 font-bold text-base p-4 rounded-lg w-2/5"
            onClick={handleIconCrossClick}
            type="button"
          >
            Cancel
          </button>
          {isAuth && (
            <button
              onClick={() => dispatch(authOperations.logout())}
              className="flex justify-center  bg-red-500 text-slate-50 font-bold text-base p-4 rounded-lg disabled:bg-slate-300 disabled:text-neutral-600 w-3/5"
              disabled={isLoading}
              type="button"
            >
              {isLoading ? <ButtonLoader /> : 'Logout'}
            </button>
          )}
        </div>
      </motion.div>
    </div>,
    modalLogout
  );
};
