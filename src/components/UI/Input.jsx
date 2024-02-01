import React from "react";

export default function Input({ id, label, image, isValid, ...props }) {
  return (
    <>
      <label htmlFor={id}>
        <span>{label}</span>
        {!isValid && <span className="invalid-text">Can't be zero</span>}
      </label>
      <p className={!isValid ? "invalid" : ""}>
        <img src={image} alt="" />
        <input
          type="number"
          id={id}
          min={1}
          required
          placeholder="0"
          {...props}
        />
      </p>
    </>
  );
}
