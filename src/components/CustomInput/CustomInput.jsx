import { useField } from 'formik';
import React from 'react';

export const CustomInput = ({ label, styles, ...props }) => {
  const [field, meta] = useField(props);
  console.log(field);
  console.log(meta);
  return (
    <>
      <label className={`relative grid ${styles}`}>
        <span className="text-xs text-slate-950 leading-4 pl-2 pb-0.5">
          {label}
        </span>
        <input
          {...field}
          {...props}
          className={`border-indigo-200 border py-3 px-2 rounded-lg focus:outline-none ${
            meta.error && meta.touched && 'border-red-500'
          }`}
        />
        {meta.error && meta.touched && (
          <p className="absolute -bottom-4 text-xs text-red-500">
            {meta.error}
          </p>
        )}
      </label>
    </>
  );
};
