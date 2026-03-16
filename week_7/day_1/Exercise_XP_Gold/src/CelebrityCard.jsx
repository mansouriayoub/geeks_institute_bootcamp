const CelebrityCard = ({ title, imageUrl, description, buttonLabel, buttonUrl }) => {
  return (
    <div className="max-w-md bg-white shadow rounded p-4">
      <img src={imageUrl} alt={title} className="rounded mb-1" />

      <h2 className="text-xl font-bold mb-2">{title}</h2>

      <p className="text-gray-600 mb-3">{description}</p>

      <a href={buttonUrl} className="bg-blue-500 text-white px-4 py-2 rounded">
        {buttonLabel}
      </a>

    </div>
  );
};
export default CelebrityCard
