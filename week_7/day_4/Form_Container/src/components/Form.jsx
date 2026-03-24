import { useState } from "react";
import Input from "./Input";

const Form = () => {
  const [infos, setInfos] = useState({
    firstName: "",
    lastName: "",
    age: '',
    gender: "",
    destination: "",
    lactosFree: false,
    nutsFree: false,
    MaLactoseFree: false,
  });

  // Handle input changes and update `infos` state
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInfos((prevInfo) => ({
      ...prevInfo,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitInfos = (e) => {
    e.preventDefault();
    const query = new URLSearchParams(infos).toString();
    const url = `http://localhost:5173/?${query}`;
    // Instead of rendering the object directly (which causes the error), 
    // you can use a stringified version for displaying or debugging purposes:
    console.log(JSON.stringify(infos, null, 2));
    // For setting an output state for rendering, ensure you stringify:
    // setOutput(JSON.stringify(infos, null, 2));
  };

  return (
    <>
      <div>
        <h1>Sample form</h1>
        <form onSubmit={submitInfos}>
          <Input
            value={infos.firstName}
            onChange={handleChange}
            type="text"
            name="firstName"
            placeholder="First Name"
            className="text"
          />
          <Input
            value={infos.lastName}
            onChange={handleChange}
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="text"
          />
          <Input
            value={infos.age}
            onChange={handleChange}
            type="number"
            name="age"
            placeholder="Age"
            className="text"
          />
          <label htmlFor="male">
            <Input
              onChange={handleChange}
              type="radio"
              name="gender"
              placeholder="Male"
              className="radio"
              value={infos.gender}
            />
            Male
          </label>
          <label htmlFor="male">
            <Input
              onChange={handleChange}
              type="radio"
              name="gender"
              placeholder="Female"
              className="radio"
              value={infos.gender}
            />
            Female
          </label>
          <select name="destination" id="" onChange={handleChange}>
            <option value="">-- Please Choose a destination --</option>
            <option value="Thailand">Thailand</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
          </select>
          <label htmlFor="">Dietary restrictions:</label>
          <Input type="checkbox" name="nutsFree" className="radio" onChange={handleChange} />
          <span>Nuts free</span>
          <Input type="checkbox" name="lactosFree" className="radio" onChange={handleChange} />
          <span>Lactose free</span>
          <Input type="checkbox" name="MaLactoseFree" className="radio" onChange={handleChange} />
          <span>MaLactose freele</span>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="enteredInfos">
        <ul>
          {/* This code takes all properties (key-value pairs) of the 'infos' object,
              and for each entry, creates a list item (<li>) that displays:
              - The property name (`key`) in bold,
              - followed by its value (converted to a string if needed).
              This effectively shows all user-entered information as a summary list. */}
          {Object.entries(infos).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value && value.toString()}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Form;
