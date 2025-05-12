import React, { forwardRef } from 'react';
import styles from './InputField.module.css';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, className, ...rest }, ref) => {
    const inputClasses = [
      styles.inputWrapper,
      error ? styles.error : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <div className={inputClasses}>
        {label && <label className={styles.label}>{label}</label>}
        <input 
          ref={ref}
          className={styles.input}
          {...rest}
        />
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;