const Example1 = ({ data }) => {
  return (
    <div className="p-4 rounded shadow-sm bg-light" style={{ maxWidth: 500, margin: "24px auto" }}>
      <h5 className="mb-3 text-primary">Social Media Links</h5>
      <ul className="list-group">
        {data.SocialMedias.map((url) => (
          <li className="list-group-item d-flex align-items-center" key={url}>
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
              {url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Example1;
