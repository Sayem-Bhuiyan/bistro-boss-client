import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
