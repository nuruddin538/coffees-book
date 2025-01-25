import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navber from "../components/Navber";
import { Toaster } from "react-hot-toast";

function MainLayout() {
  return (
    <div>
      <Toaster />
      {/* Navber */}
      <div className="h-16">
        <Navber></Navber>
      </div>
      {/* Dynamic Section */}
      <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto px-12">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
