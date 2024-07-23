import React from 'react';
import {
  radioBase,
  radioLabel,
  radioInput,
  radioDescription,
  errorRadioInput,
} from './RadioButton.styles';

export interface RadioButtonProps {
  checked?: boolean;
  label: string;
  description?: string;
  disabled?: boolean;
  error?: boolean;
  onChange: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  checked = false,
  label,
  description,
  disabled = false,
  error = false,
  onChange,
}) => {
  return (
    <div
      className={radioBase}
      onClick={disabled ? undefined : onChange}
    >
      <input
        type="radio"
        checked={checked}
        disabled={disabled}
        className={`${radioInput} ${error ? errorRadioInput : ''}`}
        onChange={() => {}}
      />
      <div>
        <div className={radioLabel}>
          {label}
        </div>
        {description && (
          <div className={`${radioDescription}`}>
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default RadioButton;
