const Example2 = ({ data }) => {
  return (
    <>
      <div className="p-4 rounded shadow-sm bg-light" style={{ maxWidth: 600, margin: "32px auto" }}>
        <h5 className="mb-4 text-primary">Skill Areas</h5>
        {data.Skills.map((skill, index) => (
          <div key={index} className="mb-4 p-3 rounded" style={{ background: "#f9f9fc", border: "1px solid #e3e6ed" }}>
            <h6 className="mb-2 text-success" style={{ letterSpacing: "1px", fontWeight: "bold" }}>{skill.Area}</h6>
            <ul className="list-group">
              {skill.SkillSet.map((skillItem, idx) => (
                <li 
                  key={idx} 
                  className="list-group-item d-flex align-items-center justify-content-between"
                  style={{ border: "none", background: "transparent" }}
                >
                  <span>{skillItem.Name}</span>
                  <span className={`badge ${skillItem.Hot ? 'bg-danger' : 'bg-secondary'}`}>
                    {skillItem.Hot ? 'Hot!' : 'Ordinary'}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
export default Example2;
