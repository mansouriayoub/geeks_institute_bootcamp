const Language = ({name, votes, onClick}) => {
  return (
    <>
      <div className="language">
        <div className="voteCount">{votes}</div>
        <div className="languageName">{name}</div>
        <button onClick={onClick}>Click Here</button>
      </div>
    </>
  );
};
export default Language