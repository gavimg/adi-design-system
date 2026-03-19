import React, { InputHTMLAttributes } from 'react';
import './Input.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  hint,
  fullWidth = false,
  id,
  className,
  ...rest
}) => {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  const wrapperClasses = ['ds-input', fullWidth ? 'ds-input--full' : null, error ? 'ds-input--error' : null]
    .filter(Boolean)
    .join(' ');
  const inputClasses = ['ds-input__control', className].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses}>
      {label && (
        <label htmlFor={inputId} className="ds-input__label">
          {label}
        </label>
      )}
      <input id={inputId} className={inputClasses} {...rest} />
      {error && <span className="ds-input__message ds-input__message--error">{error}</span>}
      {hint && !error && <span className="ds-input__message ds-input__message--hint">{hint}</span>}
    </div>
  );
};
