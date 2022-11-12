import { NavLink } from "react-router-dom";
import { Box } from '@chakra-ui/react'
import styles from "./navbar.module.scss";
import NavbarAuth from "./NavbarAuth/NavbarAuth";
import UserMenu from "./NavbarUser/UserMenu";
import useAuth from "shared/hooks/useAuth";


const getClassName = ({isActive}) => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

const Navbar = () => {
    const isLogin = useAuth();

    return (
        <Box bg='gold'  className={styles.navbar}>
            <NavLink className={getClassName} to="/">Logo</NavLink>
            {isLogin && <NavLink className={getClassName} to="/contacts">My Contacts</NavLink>}
            {isLogin ? <UserMenu /> : <NavbarAuth trowStyle={getClassName} />}
        </Box>
    );
};

export default Navbar;