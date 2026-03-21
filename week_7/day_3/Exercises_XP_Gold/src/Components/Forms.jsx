import { useState } from "react";

const Forms = () => {
  const [user, setUser] = useState({
    name: "",
    age: null,
    errormessage: "",
    message: "This is the initial content",
    car: 'Volvo'
  });

  const handleChange = (e) => {
    // since e.target only has .name and .value, not .age. We only need the correct destructure:
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
      errormessage:
        name === "age" && value && isNaN(value)
          ? "Your age must be a number"
          : "",
    }));
  };

  let header = "";
  if (user.name)
    header = (
      <h1>
        Hello {user.name} {user.age}{" "}
      </h1>
    );

  const mySubmitHandler = (e) => {
    e.preventDefault();
    alert(`You are submitting ${user.name}`);
  };

  return (
    <form className="user-form" onSubmit={mySubmitHandler}>
      {header}
      <label htmlFor="name">Enter your name</label>
      <input type="text" name="name" id="name" onChange={handleChange} />
      <label htmlFor="age">Enter your age</label>
      <input type="text" name="age" id="age" onChange={handleChange} />
      <span className="form-error">{user.errormessage}</span>
      <textarea
        name="message"
        id="message"
        cols="10"
        rows="5"
        value={user.message}
        onChange={handleChange}
      ></textarea>
      <label>
        Select a car brand:
        <select name="car" value={user.car} onChange={handleChange}>
          <option value="Toyota">Toyota</option>
          <option value="Honda">Honda</option>
          <option value="Volvo">Volvo</option>
          <option value="BMW">BMW</option>
        </select>
      </label>
      <input type="submit" value="submit" />
    </form>
  );
};
export default Forms;
