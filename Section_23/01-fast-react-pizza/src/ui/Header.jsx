import { Link } from "react-router-dom";
import SeachOrder from "../features/order/SeachOrder";

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/">Fast React Pizza Co.</Link>
      <SeachOrder />
      <p>Username</p>
    </header>
  );
}

export default Header;
