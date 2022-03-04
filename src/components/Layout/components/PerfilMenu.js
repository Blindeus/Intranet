import React, { useState} from "react";
import jwt_decode from "jwt-decode";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import { useAuthContext } from "../../../hooks/auth/useAuthentication";

const PerfilMenu = () => {
  const [menu, setMenu] = useState(false);
  const { state, logout } = useAuthContext();
  const { name: userName } = jwt_decode(state.token);

  return (
    <>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item "
          id="page-header-user-dropdown"
          tag="Button"
        >
          <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
          <span className="d-none d-xl-inline-block ms-2 me-1 username-header">
            {userName}
          </span>
          <Icon path={mdiChevronDown} size={1} color="#fff" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem>
            <Button onClick={logout} className="dropdown-item">
              <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
              <span>Salir</span>
            </Button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default PerfilMenu;
