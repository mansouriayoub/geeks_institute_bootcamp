const Input = ({ type, name, id, placeholder, value, onChange, error }) => {
  return (
    <>
      <label htmlFor={name}>{placeholder}</label>
      <input type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={onChange} />
      {error ? <span className="error-message" style={{ color: "red" }}>{error}</span> : null}
    </>
  );
};
export default Input;
