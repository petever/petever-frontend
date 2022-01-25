import React, { useCallback, useState } from 'react';

const useInputs = (initialInputs) => {
  const [inputs, setInputs] = useState(initialInputs);
  const handleInputsChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setInputs((inputs) => ({ ...inputs, [name]: value }));
    },
    []
  );
  return [inputs, handleInputsChange, setInputs];
};

export default useInputs;
