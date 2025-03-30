import { Outlet } from "react-router-dom";
import BgVideo from "../../components/body-overlay-video/BgVideo";
import HeaderNav from "../../components/header/HeaderNav";
import Cursor from "../../components/cursor/Cursor";
import BgCover from "../../components/body-overlay-div/BgCover";

function Layout() {
  return (
    <>
      {/* <HeaderNav /> */}
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
