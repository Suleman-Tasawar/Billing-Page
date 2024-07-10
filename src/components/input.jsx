import React from "react";

const Input = ({keys,value, onChange, index }) => {
  return (
    <>
      <input
        key={keys}
        value={value}
        onChange={onChange}
        placeholder={`Starter ${index + 1}`}
      />
    </>
  );
};

export default Input;
