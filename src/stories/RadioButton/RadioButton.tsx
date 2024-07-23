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
  showLabel?: boolean;
  description?: string;
  showDescription?: boolean;
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
  onChange: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  checked = false,
  label,
  showLabel = true,
  description,
  showDescription = true,
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
        onChange={onChange}
      />
      <div>
        {showLabel && (
          <div className={radioLabel}>
            {label}
          </div>
        )}
        {showDescription && description && (
          <div className={radioDescription}>
            {description || ""}
          </div>
        )}
      </div>
    </div>
  );
};

export default RadioButton;
