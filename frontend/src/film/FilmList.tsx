import { Film } from '../types/film';
import { useState } from 'react'; // lets us use the useState
import { useEffect } from 'react';
function FilmList() {
  const [filmData, setFilmData] = useState<Film[]>([]);

  useEffect(() => {
    // get the data from the api
    const fetchFilm = async () => {
      const rsp = await fetch('https://localhost:4000/film');
      const temp = await rsp.json();
      setFilmData(temp);
    };
    fetchFilm();
  }, []);

  return (
    <>
      <div className="row">
        <h4>The Best Films</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Film</th>
            <th>Category</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>Lent To</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {filmData
            .filter((f) => f.edited === 'Yes')
            .sort((a, b) => (a.title < b.title ? -1 : 1))
            .map((f) => (
              <tr key={f.movieId}>
                <td>{f.title}</td>
                <td>{f.category}</td>
                <td>{f.year}</td>
                <td>{f.director}</td>
                <td>{f.rating}</td>
                <td>{f.edited}</td>
                <td>{f.lentTo}</td>
                <td>{f.notes}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default FilmList;
