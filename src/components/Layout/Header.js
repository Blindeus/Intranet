import PerfilMenu from "./components/PerfilMenu";
import { Button } from "reactstrap";

const Header = ({ hideSidebar, setHideSidebar }) => {
  return (
    <nav className="layout-navbar">
      <Button
        type="button"
        className="btn btn-sm px-3 font-size-16 header-item "
        id="vertical-menu-btn"
        onClick={() => setHideSidebar(!hideSidebar)}
      >
        <i className="fa fa-fw fa-bars" />
      </Button>
      <PerfilMenu />
    </nav>
  );
};

export default Header;
