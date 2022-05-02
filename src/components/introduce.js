import propTypes, { func, string } from "prop-types";
import { Link } from "react-router-dom";

function Intro({ id, poster, title, genres }) {
  return (
    <div>
      <img src={poster} alt={title} />
      <p>{id}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Intro;
