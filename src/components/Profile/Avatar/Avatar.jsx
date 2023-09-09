import React, { useEffect } from 'react';
import { BsCloudUpload } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import profileOperations from 'redux/profile/profile-operations';
import { selectAvatarUrl } from 'redux/profile/profile-selectors';

function Avatar() {
  const { avatarUrl } = useSelector(selectAvatarUrl);
  const dispatch = useDispatch();

  const handleSubmitImage = async e => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('avatarUrl', file);
    dispatch(profileOperations.updateAvatar(formData));
  };
  useEffect(() => {
    !avatarUrl && dispatch(profileOperations.getAvatar());
  }, [dispatch, avatarUrl]);

  return (
    <>
      {avatarUrl ? (
        <div className="w-16 h-16 relative grid place-content-center">
          <img
            style={{ borderRadius: '50%' }}
            className="w-16 h-16"
            src={avatarUrl}
            alt="avatar"
            loading="lazy"
          />
          <label className="absolute w-full h-full cursor-pointer">
            <input
              className="w-0 h-0 opacity-0 overflow-hidden"
              onChange={handleSubmitImage}
              type="file"
              name="avatarUrl"
            />
          </label>
        </div>
      ) : (
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
      )}
    </>
  );
}

export default Avatar;
