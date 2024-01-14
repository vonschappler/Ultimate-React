import { Link } from "react-router-dom";
import SeachOrder from "../features/order/SeachOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SeachOrder />
      <Username />
    </header>
  );
}

export default Header;
