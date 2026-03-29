const Example3=({data})=>{
    return (
        <div 
            className="d-flex flex-wrap gap-3 justify-content-center" 
            style={{ margin: "0 auto 40px auto" }}
        >
            {
                data.Experiences.map((experience, index) => (
                    <div key={index} className="card" style={{ width: '22rem', minWidth: '18rem' }}>
                        <div className="card-body d-flex align-items-center">
                            <img
                                src={experience.logo}
                                alt={`${experience.companyName} logo`}
                                className="rounded-circle"
                                style={{ width: '48px', height: '48px', objectFit: 'cover', marginRight: '16px' }}
                            />
                            <h5 className="card-title mb-0">{experience.companyName}</h5>
                        </div>
                        <div className="card-body pt-0">
                        {
                            experience.roles.map((role, rIdx) => (
                                <div key={rIdx} className="mb-2">
                                    <ul className="list-unstyled mb-0">
                                        <li><strong>Title: </strong>{role.title}</li>
                                        <li><strong>Description: </strong>{role.description}</li>
                                        <li>
                                            <strong>Period: </strong>
                                            from {role.startDate} to {role.endDate}
                                        </li>
                                        <li><strong>Location: </strong>{role.location}</li>
                                    </ul>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Example3