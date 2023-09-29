import React from "react";

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  name,
  onChangeText,
  readonly,
  isPassword,
  togglePassword
}) => {
  return (
    <div className="x-input-component">
      {label && (<p className="x-input-label">{label}</p>)}
      <input
        className={isPassword ? `x-input-field my-2 x-password` : `x-input-field my-2 x-password`}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChangeText}
        readOnly={readonly}
      />
      {isPassword && (
        <p onClick={togglePassword} className="x-toggle-password">{type == "password" ? "Show" : "Hide" }</p>
      )}
    </div>
  );
};

export default Input;
