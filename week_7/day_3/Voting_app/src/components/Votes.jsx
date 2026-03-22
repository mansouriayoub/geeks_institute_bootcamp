import Language from "./Language";
import { useState } from "react";

const Votes = () => {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const handleVote = (languageName) => {
    setLanguages(
      languages.map((language) => {
        if (language.name === languageName) {
          return {
            ...language,
            votes: language.votes + 1,
          };
        } else {
          return language;
        }
      }),
    );
  };

  return (
    <>
      <div className="container">
        <h1>Vote Your Language!</h1>
        <div className="languages">
          {languages.map((language,index) =>( 
            <Language
              key={index}
              name={language.name}
              votes={language.votes}
              onClick={() => handleVote(language.name)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Votes;
