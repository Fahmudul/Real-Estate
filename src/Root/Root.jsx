import { Outlet } from "react-router-dom";
import "../Pages/Home/linearBackground.css";
const Root = () => {
  return (
    <div className="font-monospace  ">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
