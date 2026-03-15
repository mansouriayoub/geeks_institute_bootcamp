const UserFavoriteAnimals = (props) => {
  return <>
    <ul>
        {props.favAnimals.map((favAnimals, index)=>(
          <li key={index}>{favAnimals}</li>
        ))}
      </ul>
  </>;
};

export default UserFavoriteAnimals;
