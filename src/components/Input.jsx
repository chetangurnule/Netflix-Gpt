import React from "react";
import { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

const Input = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChangeHandler,
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`mb-6 relative ${className}`}>
      <label
        className="block text-gray-300 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <div className="relative flex">
        <input
          className="bg-slate-800 bg-opacity-50 shadow border rounded w-full py-2 px-3 text-white"
          id={name}
          type={
            name === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          value={value}
          onChange={onChangeHandler}
        />
        {/* if name is equal to password then only show the below div */}
        {name === "password" && (
          <button
            className="absolute right-0 top-0 mt-2 mr-4 flex items-center justify-center"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <RiEyeFill className="h-6 w-6 text-gray-300" />
            ) : (
              <RiEyeOffFill className="h-6 w-6 text-gray-300" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
