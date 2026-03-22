import { useState } from "react";
import Input from "./Input";

const Form = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const validateFunction = (name, value, placeholder) => {

    if (value.trim() === "") {
      setError((prevError) => ({
        ...prevError,
        [name]: `${placeholder} field is required`,
      }));
      return;
    }
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError((prevError) => ({
        ...prevError,
        email: "Email is invalid"
      }));
      return;
    }
    if (name === "phoneNumber" && !/^\+?[1-9][0-9]{7,14}$/.test(value)) {
      setError((prevError) => ({
        ...prevError,
        phoneNumber: "Phone number is invalid",
      }));
      return;
    }
    setError(prevError=>({
        ...prevError,
        [name]:''
    }));
  };

  const handleChange = (e) => {
    const { name, value, placeholder } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
    validateFunction(name, value, placeholder);
  };

  return (
    <>
      <form>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          onChange={handleChange}
          error={error.firstName}
          value={user.firstName}
        />
        <Input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          error={error.lastName}
          value={user.lastName}
        />
        <Input
          type="number"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Phone Number"
          onChange={handleChange}
          error={error.phoneNumber}
          value={user.phoneNumber}
        />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          error={error.email}
          value={user.email}
        />
      </form>
    </>
  );
};
export default Form;
