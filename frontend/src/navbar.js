import logo from './HiltonLogo.png';
export default function NavBar() {
  return (
    <nav className="nav">
      <img src={logo} alt="logo" />
      <a href="/" className="site-title">
        Main Page
      </a>
      <ul>
        <li className="active">
          <a href="/blog">My Podcasts</a>
        </li>
        <li>
          <a href="/movieList">Movie List</a>
        </li>
      </ul>
    </nav>
  );
}
