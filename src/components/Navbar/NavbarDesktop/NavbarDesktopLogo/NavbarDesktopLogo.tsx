import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { Logo } from "assets/images";

import styles from "./NavbarDesktopLogo.module.scss";

const NavbarDesktopLogo: FunctionComponent = () => {
  return (
    <div>
      <Link to="/" className={styles.logo}>
        <Logo className={styles.icon} />
      </Link>
    </div>
  );
};

export default NavbarDesktopLogo;
