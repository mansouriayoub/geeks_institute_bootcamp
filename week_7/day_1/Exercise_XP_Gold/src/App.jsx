import "./App.css";
import CelebrityCard from "./CelebrityCard";

function App() {
  const celebrities = [
    {
      title: "Bob Dylan",
      imageUrl:
        "https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg",
      buttonLabel: "Go to Wikipedia",
      buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
      description:
        "Bob Dylan is an American singer, songwriter and cultural icon who has influenced music for more than five decades.",
    },
    {
      title: "Paul McCartney",
      imageUrl:
        "https://www.cheatsheet.com/wp-content/uploads/2023/07/the-beatles-eleanor-rigby-1.jpg",
      buttonLabel: "Go to Wikipedia",
      buttonUrl: "https://en.wikipedia.org/wiki/Paul_McCartney",
      description:
        "Paul McCartney is an English singer, songwriter, and musician best known as a member of the Beatles.",
    },
  ];

  const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

  return (
    <>

      {celebrities.map((celebrity, index) => (

        <CelebrityCard
          key={index}
          title={celebrity.title}
          imageUrl={celebrity.imageUrl}
          description={celebrity.description}
          buttonLabel={celebrity.buttonLabel}
          buttonUrl={celebrity.buttonUrl}
        />

      ))}


      <ul className="max-w-md mx-auto mt-6">
        {planets.map((planet, index) => (
          <li className="border p-3 mb-2 rounded bg-gray-100" key={index}>{planet}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
