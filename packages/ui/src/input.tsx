'use client';

import { useId } from 'react';
import IconButtons from './icon-buttons';

function Input({
  fullWidth,
  icon,
  label,
  type,
  placeholder = true,
}: {
  fullWidth: boolean;
  icon: boolean;
  label?: string;
  type?: string;
  placeholder?: boolean;
}) {
  const generatedId = useId();

  const inputStyles = fullWidth
    ? ' w-full bg-light-900 dark:bg-dark-300 rounded-xl '
    : ' w-[600px] max-w-[600px] dark:bg-[linear-gradient(90deg,_#1a1e27,_#101317)] rounded-xs';

  const newPlaceholder = placeholder
    ? icon
      ? 'Search anything globally'
      : type === 'email'
        ? 'suziemaster17@gmail.com'
        : type === 'password'
          ? '•••••••'
          : ''
    : '';

  return (
    <div className="flex flex-col gap-2 items-start para-medium">
      {label && (
        <label htmlFor={generatedId} className="dark:text-light-700">
          {label}
        </label>
      )}
      <div
        className={
          inputStyles +
          ' p-2.5 flex items-center text-dark-800 dark:text-light-800 box-border'
        }
      >
        {icon && <IconButtons icon="search" height="24px" onClick={() => {}} />}
        <input
          name={type ? type : 'text'}
          type={type ? type : 'text'}
          id={generatedId}
          placeholder={newPlaceholder}
          className="bg-transparent border-none outline-none w-full text-inherit pl-2 placeholder:text-dark-700 dark:placeholder:text-light-800/30"
        />
      </div>
    </div>
  );
}

export default Input;
