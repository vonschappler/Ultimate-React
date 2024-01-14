import { Link } from "react-router-dom";
import SeachOrder from "../features/order/SeachOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SeachOrder />
      <Username />
    </header>
  );
}

export default Header;
