import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [inputName, setInputName] = useState("");
  const [isInputNameTouched, setIsInputNameTouched] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const isInputNameValid = inputName.trim() !== "";
  const nameInputIsInvalid = isInputNameTouched && !isInputNameValid;

  useEffect(() => {
    console.log(`useEffect: ${isInputNameValid}`);
    if (isInputNameValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isInputNameValid]);

  const inputNameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const inputNameBlurHandler = (event) => {
    setIsInputNameTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setIsInputNameTouched(true);
    if (!isInputNameValid) {
      return;
    }
    console.log(inputName);
    setInputName("");
    setIsInputNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputNameChangeHandler}
          onBlur={inputNameBlurHandler}
          value={inputName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
