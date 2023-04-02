import { useState } from 'react' ; 

const useForm = (initialState = {}) => {
  const [inputValue, setInputValue] = useState({initialState});

  const resetForm = () =>{
    setInputValue(initialState);
  }

  const setForm = (newValue) => {
    setInputValue(newValue);
  }

  const handleInput = ({ target }) => {
    setInputValue({
        ...inputValue,
        [target.name] : target.value
    });
  }

  return{
    inputValue,
    handleInput,
    resetForm,
    setForm
  }
}

export default useForm
