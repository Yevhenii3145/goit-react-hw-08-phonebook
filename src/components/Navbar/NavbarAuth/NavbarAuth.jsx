import { NavLink } from "react-router-dom";

export default function NavbarAuth({trowStyle}) {
  return (
    <div>
        <NavLink style={{marginRight:"20px", width: "100px"}} className={trowStyle} to="/register">Register</NavLink>
        <NavLink style={{marginRight:"40px", width: "100px", textAlign: "center"}} className={trowStyle} to="/login">Login</NavLink>
    </div>
  );
};
