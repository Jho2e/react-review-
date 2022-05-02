import propTypes, { string } from "prop-types";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Intro from "../components/introduce";

function Detail() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetails(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <h1>로 딩 중 ...</h1>
      ) : (
        <div>
          {details.products.map((detail) => (
            <Intro
              key={detail.id}
              id={detail.id}
              poster={detail.medium_cover_image}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Detail;
