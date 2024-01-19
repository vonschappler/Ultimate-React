import { useSelector } from "react-redux";
import { getUserName } from "./userSlice";

function Username() {
  const username = useSelector(getUserName);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold transition-all duration-300 md:block">
      {username}
    </div>
  );
}

export default Username;
