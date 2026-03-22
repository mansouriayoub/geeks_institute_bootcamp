import { useState } from "react";

const Form2 = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [err, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Check empty fields
    const isEmpty = Object.values(user).some((value) => value.trim() === "");

    if (isEmpty) {
      setError("Please fill in all fields.");
      return;
    }

    //If everything is correct
    setError("");
    setSubmitted(true);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setSubmitted(false);
    setUser({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    });
    setError("");
  };

  return (
    <>
      {submitted ? (
        <div className="card">
          <p>
            {user.lastName},{user.firstName}
          </p>
          <p>
            {user.phoneNumber} | {user.email}
          </p>
          <input type="reset" value="Reset" onClick={handleReset} />
        </div>
      ) : (
        <div className="card">
          <h1>Welcome</h1>
          <p>Please provide your information below.</p>

          {err && <p style={{ color: "red" }}>{err}</p>}

          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
            <input
              onChange={handleChange}
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
            <input
              onChange={handleChange}
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone Number"
            />
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
    </>
  );
};
export default Form2;
