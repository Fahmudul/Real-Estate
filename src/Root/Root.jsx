import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-monospace">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
