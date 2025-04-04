import { Outlet } from "react-router-dom";
import BgVideo from "../../components/body-overlay-video/BgVideo";
import Cursor from "../../components/cursor/Cursor";
import BgCover from "../../components/body-overlay-div/BgCover";
import SideBar from "../../components/Ui/SideBar";
// import Loader from "../../components/loadingPage/LoadingSpinner";

function Layout() {
  return (
    <>
    {/* <Loader/> */}
      <SideBar />
      <BgVideo />
      <BgCover />
      <Cursor />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
