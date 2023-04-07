import logo from './HiltonLogo.png';

function Header() {
  return (
    <header className="row">
      <div className="col-4">
        <img src={logo} alt="logo" />
      </div>
      <div className="col">
        <h3>Joel Hilton's Film Collection</h3>
      </div>
    </header>
  );
}
export default Header;
