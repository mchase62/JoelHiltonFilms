import React from 'react';
import './App.css';
import TopBanner from './blah';
import MovieList from './pages/Movies';
import NavBar from './navbar';
import MyPodcasts from './pages/podcasts';
import logo from './HiltonLogo.png'; // brings in our logo
import Header from './Header';
import FilmList from './film/FilmList';

function App() {
  let component;
  switch (window.location.pathname) {
    case '/':
      component = <TopBanner />;
      break;
    case '/blog':
      component = <MyPodcasts />; // goes to our podcast page
      break;
    case '/movieList':
      //component = <MovieList />; // goes to our movie list
      component = <FilmList />;
      break;
  }
  console.log(window.location);
  return (
    <div className="App">
      <NavBar />
      {component}
    </div>
  );
}

export default App;
